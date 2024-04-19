import { Injectable } from '@angular/core';
import { Task } from '../../../../services/task/task.typings';
import { Observable, filter, map, startWith, switchMap, tap } from 'rxjs';
import { TaskService } from '../../../../services/task/task.service';

@Injectable()
export class TasksPageBoardService {
  public noStatusTasks$: Observable<Task[]> = this.getTasks('NoStatus');
  public toDoTasks$: Observable<Task[]> = this.getTasks('ToDo');
  public inProgressTasks$: Observable<Task[]> = this.getTasks('InProgress');
  public doneTasks$: Observable<Task[]> = this.getTasks('Done');
  constructor(private taskService: TaskService) {}

  public updateTask(id: Task['id'], status: Task['status']): Observable<Task> {
    return this.taskService.updateTask(id, { status });
  }

  private getTasks(status: Task['status']): Observable<Task[]> {
    return this.taskService.taskChange$.pipe(
      startWith(true),
      switchMap(() => this.taskService.getTasks({ status }))
    );
  }
}
