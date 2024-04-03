import { Injectable, Optional } from '@angular/core';
import { Task } from './task.typings';
import { Observable } from 'rxjs';
import { TaskApiService } from '../../api/task/task-api.service';

@Injectable({ providedIn: 'root' })
export class TaskService {
  constructor(private taskApiServivce: TaskApiService) {}

  public getAllTasks(): Observable<Task[]> {
    return this.taskApiServivce.getAllTasks();
  }

  public createTask(task: Task): Observable<unknown> {
    task.creationDate = new Date(Date.now());
    return this.taskApiServivce.createTask(task);
  }

  public getTask(taskId: number): Observable<Task> {
    return this.taskApiServivce.getTask(taskId);
  }

  public removeTask(id: number): Observable<void> {
    return this.taskApiServivce.removeTask(id) as Observable<void>;
  }

  public updateTask(
    id: Task['id'],
    updateParams: Partial<Task>
  ): Observable<void> {
    return this.taskApiServivce.updateTask(
      id,
      updateParams
    ) as Observable<void>;
  }
}
