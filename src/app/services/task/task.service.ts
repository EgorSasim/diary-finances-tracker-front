import { Injectable } from '@angular/core';
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
}
