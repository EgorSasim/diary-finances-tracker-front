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

  public getTask(id: Task['id']): Observable<Task> {
    return this.taskApiServivce.getTask(id);
  }

  public createTask(task: Task): Observable<Task> {
    task.creationDate = new Date(Date.now());
    return this.taskApiServivce.createTask(task);
  }

  public removeTask(id: Task['id']): Observable<Task> {
    return this.taskApiServivce.removeTask(id);
  }

  public updateTask(
    id: Task['id'],
    updateParams: Partial<Task>
  ): Observable<Task> {
    return this.taskApiServivce.updateTask(id, updateParams);
  }
}
