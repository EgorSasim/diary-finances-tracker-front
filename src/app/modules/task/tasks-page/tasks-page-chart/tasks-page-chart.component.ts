import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TasksPageChartService } from './tasks-page-chart.service';
import { Observable } from 'rxjs';
import {
  ColorInfo,
  TaskChartItem,
  TaskCreationDateChartItem,
} from './tasks-page-chart-typings';
import {
  CHART_COLOR_SCHEME_NAME,
  TASK_AMOUNT_TO_EACH_COLOR_CHART_OPTIONS,
  TASK_CREATION_CHART_OPTIONS,
  TASK_STATUSES_PERCENTAGE_CHART_OPTIONS,
} from './tasks-page-chart.constants';
import { getRandChartColorTheme } from './tasks-page-chart.helpers';

@Component({
  selector: 'dft-tasks-page-chart',
  templateUrl: './tasks-page-chart.component.html',
  styleUrl: './tasks-page-chart.component.scss',
  providers: [TasksPageChartService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksPageChartComponent {
  public colorsInfo$: Observable<ColorInfo[]> =
    this.tasksPageChartService.colorInfo$;
  public taskCreationChartData$: Observable<TaskCreationDateChartItem[]> =
    this.tasksPageChartService.getTaskCreationData();
  public taskStatusPercentageChartData$: Observable<TaskChartItem[]> =
    this.tasksPageChartService.getTaskStatusesPercentage();

  public taskAmountToEachColorData$: Observable<TaskChartItem[]> =
    this.tasksPageChartService.getTasksCountToEachColor();

  public readonly taskCreationChartOptions: typeof TASK_CREATION_CHART_OPTIONS =
    { ...TASK_CREATION_CHART_OPTIONS, colorScheme: 'fire' };

  public readonly taskStatusPercentageChartOptions: typeof TASK_STATUSES_PERCENTAGE_CHART_OPTIONS =
    { ...TASK_STATUSES_PERCENTAGE_CHART_OPTIONS, colorScheme: 'aqua' };

  public readonly taskAmountToEachColorChartOptions: typeof TASK_AMOUNT_TO_EACH_COLOR_CHART_OPTIONS =
    TASK_AMOUNT_TO_EACH_COLOR_CHART_OPTIONS;

  constructor(private tasksPageChartService: TasksPageChartService) {}
}
