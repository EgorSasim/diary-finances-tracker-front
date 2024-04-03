import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TASK_API_PATH } from './task-api.constants';
import { TaskDto } from './task-api.typings';
import { API_PATH } from '../api.constants';

@Injectable({
  providedIn: 'root',
})
export class TaskApiService {
  constructor(private httpClient: HttpClient) {}

  public getAllTasks(): Observable<TaskDto[]> {
    return this.httpClient.get<TaskDto[]>(`${API_PATH}/${TASK_API_PATH}`, {
      responseType: 'json',
    });
  }

  public getTask(id: TaskDto['id']): Observable<TaskDto> {
    return this.httpClient.get<TaskDto>(`${API_PATH}/${TASK_API_PATH}/${id}`, {
      responseType: 'json',
    });
  }

  public createTask(task: TaskDto): Observable<unknown> {
    return this.httpClient.post(`${API_PATH}/${TASK_API_PATH}`, task);
  }

  public removeTask(id: TaskDto['id']): Observable<unknown> {
    return this.httpClient.delete(`${API_PATH}/${TASK_API_PATH}/${id}`);
  }

  public updateTask(
    id: TaskDto['id'],
    updateParams: Partial<TaskDto>
  ): Observable<unknown> {
    return this.httpClient.patch(
      `${API_PATH}/${TASK_API_PATH}/${id}`,
      updateParams
    );
  }
}
