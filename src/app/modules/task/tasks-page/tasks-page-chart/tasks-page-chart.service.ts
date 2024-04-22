import { Injectable } from '@angular/core';
import { TaskService } from '../../../../services/task/task.service';
import { Observable, map, startWith, switchMap } from 'rxjs';
import { Task } from '../../../../services/task/task.typings';
import {
  TaskChartColor,
  TasksAmountToChartColor,
} from './tasks-page-chart-typings';
import { getTaskColorByHex } from './tasks-page-chart.helpers';

@Injectable()
export class TasksPageChartService {
  constructor(private taskService: TaskService) {}

  public handleTaskChange(): Observable<Task[]> {
    return this.taskService.taskChange$.pipe(
      startWith(true),
      switchMap(() => this.taskService.getTasks())
    );
  }

  public getTasksCountToEachColor(): Observable<TasksAmountToChartColor> {
    return this.handleTaskChange().pipe(
      map((tasks) => {
        const taskAmountToColor: TasksAmountToChartColor = {
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

        tasks.forEach((task) => {
          if (task.color) {
            taskAmountToColor[getTaskColorByHex(task.color)]++;
          }
        });
        console.log('taskAmountToColor: ', taskAmountToColor);
        return taskAmountToColor;
      })
    );
  }
}
