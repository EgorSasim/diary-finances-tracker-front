import { Injectable } from '@angular/core';
import { TaskService } from '../../../../services/task/task.service';
import { Task, TaskSearchParams } from '../../../../services/task/task.typings';
import { Observable, startWith, switchMap } from 'rxjs';

@Injectable()
export class TasksPageListService {
  public tasksChange$: Observable<void> = this.taskService.taskChange$;

  constructor(private taskService: TaskService) {}

  public getTasks(searchParams: TaskSearchParams): Observable<Task[]> {
    return this.taskService.getTasks(searchParams);
  }
}
