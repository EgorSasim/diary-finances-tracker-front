import { Injectable } from '@angular/core';
import { TaskService } from '../../../../services/task/task.service';
import {
  Observable,
  ReplaySubject,
  combineLatest,
  forkJoin,
  map,
  merge,
  of,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { Task, TaskStatus } from '../../../../services/task/task.typings';
import {
  ColorInfo,
  TaskChartColor,
  TaskChartItem,
  TaskCreationDateChartItem,
  TasksAmountToChartColor,
} from './tasks-page-chart-typings';
import { getTaskColorByHex } from './tasks-page-chart.helpers';
import { TASK_STATUS_TO_TRANSLATION } from '../../../../services/task/task.constants';
import { TranslateService } from '@ngx-translate/core';
import {
  TASK_CHART_COLOR_TO_LONG_DESCRIPTION_TRANSLATION,
  TASK_CHART_COLOR_TO_SHORT_DESCRIPTION_TRANSLATION,
  TASK_CHART_COLOR_TRANSLATION,
} from './tasks-page-chart.constants';

@Injectable()
export class TasksPageChartService {
  public colorInfo$: ReplaySubject<ColorInfo[]> = new ReplaySubject(1);

  constructor(
    private taskService: TaskService,
    private translateService: TranslateService
  ) {}

  public handleTaskChange(): Observable<Task[]> {
    return this.taskService.taskChange$.pipe(
      startWith(true),
      switchMap(() => this.taskService.getTasks())
    );
  }

  public getTasksCountToEachColor(): Observable<TaskChartItem[]> {
    return combineLatest([
      this.handleTaskChange(),
      this.translateService.onLangChange.pipe(startWith(true)),
    ]).pipe(
      map(([tasks]) => {
        const taskAmountToColor: TasksAmountToChartColor =
          this.getTaskAmountToColorInitialVal();

        tasks.forEach((task) => {
          if (task.color) {
            taskAmountToColor[getTaskColorByHex(task.color)]++;
          }
        });
        return taskAmountToColor;
      }),
      tap((taskAmountColor) => {
        this.colorInfo$.next(
          this.mapTaskAmountToColorToColorInfo(taskAmountColor)
        );
      }),
      switchMap((taskAmountToColor) =>
        forkJoin({
          taskAmountToColor: of(taskAmountToColor),
          translations: this.getTaskColorTranslations(),
        })
      ),
      map(({ taskAmountToColor, translations }) =>
        Object.entries(taskAmountToColor).reduce((acc, obj) => {
          acc.push({
            name: translations[obj[0] as TaskChartColor],
            value: obj[1],
          });
          return acc;
        }, [] as TaskChartItem[])
      )
    );
  }

  public getTaskCreationData(): Observable<TaskCreationDateChartItem[]> {
    return this.handleTaskChange().pipe(
      map((tasks) => tasks.map((task) => task.creationDate)),
      map((creationDates) =>
        creationDates.reduce((counts: { [key: string]: number }, date) => {
          counts[date.toString()] = (counts[date.toString()] || 0) + 1;
          return counts;
        }, {})
      ),
      map((dateCounts) =>
        Object.entries(dateCounts).reduce(
          (acc: TaskCreationDateChartItem[], value) => {
            acc.push({
              name: new Date(value[0]),
              value: value[1],
            });
            return acc;
          },
          []
        )
      ),
      map((dateCounts) =>
        dateCounts.sort(
          (dateCount1, dateCount2) =>
            dateCount1.name.getTime() - dateCount2.name.getTime()
        )
      )
    );
  }

  public getTaskStatusesPercentage(): Observable<TaskChartItem[]> {
    return combineLatest([
      this.handleTaskChange(),
      this.translateService.onLangChange.pipe(startWith(true)),
    ]).pipe(
      map(([tasks, langChangeEvent]) =>
        tasks.reduce((acc, task) => {
          if (task.status) {
            acc[task.status] = (acc[task.status] || 0) + 1;
          }
          return acc;
        }, {} as { [key in TaskStatus]: number })
      ),
      switchMap((taskStatusCount) =>
        forkJoin({
          taskStatusCount: of(taskStatusCount),
          translations: this.getTaskStatusTranslations(),
        })
      ),
      map(({ taskStatusCount, translations }) => {
        const tasksAmount = Object.values(taskStatusCount).reduce(
          (sum, val) => sum + val,
          0
        );
        if (!tasksAmount) {
          return [];
        }

        const res: TaskChartItem[] = [
          {
            name: translations.Done,
            value: (taskStatusCount.Done / tasksAmount || 0) * 100,
          },
          {
            name: translations.InProgress,
            value: (taskStatusCount.InProgress / tasksAmount || 0) * 100,
          },
          {
            name: translations.NoStatus,
            value: (taskStatusCount.NoStatus / tasksAmount || 0) * 100,
          },
          {
            name: translations.ToDo,
            value: (taskStatusCount.ToDo / tasksAmount || 0) * 100,
          },
        ];
        return res;
      })
    );
  }

  private getTaskStatusTranslations(): Observable<{
    [key in TaskStatus]: string;
  }> {
    return forkJoin({
      NoStatus: this.translateService.get(
        TASK_STATUS_TO_TRANSLATION['NoStatus']
      ),
      ToDo: this.translateService.get(TASK_STATUS_TO_TRANSLATION['ToDo']),
      InProgress: this.translateService.get(
        TASK_STATUS_TO_TRANSLATION['InProgress']
      ),
      Done: this.translateService.get(TASK_STATUS_TO_TRANSLATION['Done']),
    });
  }

  private getTaskColorTranslations(): Observable<{
    [key in TaskChartColor]: string;
  }> {
    return forkJoin({
      White: this.translateService.get(TASK_CHART_COLOR_TRANSLATION['White']),
      Black: this.translateService.get(TASK_CHART_COLOR_TRANSLATION['Black']),
      Blue: this.translateService.get(TASK_CHART_COLOR_TRANSLATION['Blue']),
      Brown: this.translateService.get(TASK_CHART_COLOR_TRANSLATION['Brown']),
      Green: this.translateService.get(TASK_CHART_COLOR_TRANSLATION['Green']),
      Orange: this.translateService.get(TASK_CHART_COLOR_TRANSLATION['Orange']),
      Pink: this.translateService.get(TASK_CHART_COLOR_TRANSLATION['Pink']),
      Purple: this.translateService.get(TASK_CHART_COLOR_TRANSLATION['Purple']),
      Red: this.translateService.get(TASK_CHART_COLOR_TRANSLATION['Red']),
      Yellow: this.translateService.get(TASK_CHART_COLOR_TRANSLATION['Yellow']),
    });
  }

  private mapTaskAmountToColorToColorInfo(
    taskAmountToColor: TasksAmountToChartColor
  ): ColorInfo[] {
    const maxAmount = Math.max(...Object.values(taskAmountToColor));
    const majorColors = Object.entries(taskAmountToColor)
      .filter((entry) => entry[1] === maxAmount)
      .map((entry) => entry[0]) as TaskChartColor[];
    if (!majorColors.length) {
      return [];
    }
    return majorColors.map((color) => ({
      name: TASK_CHART_COLOR_TRANSLATION[color],
      shortDescription:
        TASK_CHART_COLOR_TO_SHORT_DESCRIPTION_TRANSLATION[color],
      longDescription: TASK_CHART_COLOR_TO_LONG_DESCRIPTION_TRANSLATION[color],
    }));
  }

  private getTaskAmountToColorInitialVal(): TasksAmountToChartColor {
    return {
      Black: 0,
      Blue: 0,
      Brown: 0,
      Green: 0,
      Orange: 0,
      Pink: 0,
      Purple: 0,
      Red: 0,
      White: 0,
      Yellow: 0,
    };
  }
}
