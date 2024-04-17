import { Injectable } from '@angular/core';
import { TaskService } from '../../../../services/task/task.service';
import { Task, TaskSearchParams } from '../../../../services/task/task.typings';
import { BehaviorSubject, Observable, merge, switchMap, tap } from 'rxjs';
import { CompletedTaskListItem } from '../../task-list/task-list-item/task-list-item.typings';

@Injectable()
export class TasksPageListService {
  public tasksChange$: Observable<void> = this.taskService.taskChange$;
  public searchParams$: BehaviorSubject<TaskSearchParams> = new BehaviorSubject(
    {}
  );
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public prevSearchParamsValue: TaskSearchParams = {};

  constructor(private taskService: TaskService) {}

  public completeTask(
    completedTaskItem: CompletedTaskListItem
  ): Observable<Task> {
    return this.taskService.updateTask(completedTaskItem.id, {
      status: completedTaskItem.status,
    });
  }

  public removeTask(id: number): Observable<Task> {
    return this.taskService.removeTask(id);
  }

  public handleTasksChanges(): Observable<Task[]> {
    return merge(this.searchParams$, this.tasksChange$).pipe(
      tap(() => console.log('outside pipe')),
      switchMap((searchParams) => {
        if (searchParams) {
          this.prevSearchParamsValue = { ...searchParams };
        }
        return this.getTasks(searchParams || this.prevSearchParamsValue);
      }),
      tap(() => this.setIsLoading(false))
    );
  }

  public setIsLoading(isLoading: boolean): void {
    this.isLoading$.next(isLoading);
  }

  public getTasks(searchParams: TaskSearchParams): Observable<Task[]> {
    return this.taskService.getTasks(searchParams);
  }

  public searchParamsChange(searchParams: TaskSearchParams): void {
    this.searchParams$.next(searchParams);
  }
}
