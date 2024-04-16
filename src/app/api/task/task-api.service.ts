import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { TASK_API_PATH } from './task-api.constants';
import { TaskDto, TaskDtoSearchParams } from './task-api.typings';
import { API_PATH } from '../api.constants';

@Injectable({
  providedIn: 'root',
})
export class TaskApiService {
  constructor(private httpClient: HttpClient) {}

  public getTasks(searchParams?: TaskDtoSearchParams): Observable<TaskDto[]> {
    let params: HttpParams = new HttpParams();
    if (searchParams) {
      Object.entries(searchParams).forEach(
        ([key, value]) => (params = params.append(key, value))
      );
    }

    return this.httpClient.get<TaskDto[]>(`${API_PATH}/${TASK_API_PATH}`, {
      params: params,
      responseType: 'json',
    });
  }

  public getTask(id: TaskDto['id']): Observable<TaskDto> {
    return this.httpClient.get<TaskDto>(`${API_PATH}/${TASK_API_PATH}/${id}`, {
      responseType: 'json',
    });
  }

  public createTask(task: TaskDto): Observable<TaskDto> {
    return this.httpClient.post<TaskDto>(`${API_PATH}/${TASK_API_PATH}`, task);
  }

  public removeTask(id: TaskDto['id']): Observable<TaskDto> {
    return this.httpClient.delete<TaskDto>(
      `${API_PATH}/${TASK_API_PATH}/${id}`
    );
  }

  public updateTask(
    id: TaskDto['id'],
    updateParams: Partial<TaskDto>
  ): Observable<TaskDto> {
    return this.httpClient.patch<TaskDto>(
      `${API_PATH}/${TASK_API_PATH}/${id}`,
      updateParams
    );
  }
}
