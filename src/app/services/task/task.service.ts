import { Injectable, Optional } from '@angular/core';
import {
  CreateTask,
  Task,
  TaskSearchParams,
  TaskWithSpaces,
} from './task.typings';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { TaskApiService } from '../../api/task/task-api.service';

@Injectable({ providedIn: 'root' })
export class TaskService {
  public taskChange$: ReplaySubject<void> = new ReplaySubject(1);

  constructor(private taskApiServivce: TaskApiService) {}

  public getTasks(searchParams?: TaskSearchParams): Observable<Task[]> {
    return this.taskApiServivce.getTasks(searchParams);
  }

  public getTask(id: Task['id']): Observable<TaskWithSpaces> {
    return this.taskApiServivce.getTask(id);
  }

  public createTask(task: CreateTask): Observable<Task> {
    task.creationDate = new Date(Date.now());
    return this.taskApiServivce
      .createTask(task)
      .pipe(tap(() => this.taskChange$.next()));
  }

  public removeTask(id: Task['id']): Observable<Task> {
    return this.taskApiServivce
      .removeTask(id)
      .pipe(tap(() => this.taskChange$.next()));
  }

  public updateTask(
    id: Task['id'],
    updateParams: Partial<Task>
  ): Observable<Task> {
    return this.taskApiServivce
      .updateTask(id, updateParams)
      .pipe(tap(() => this.taskChange$.next()));
  }
}
