import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { TASK_API_PATH } from './task-api.constants';
import {
  TaskDto,
  TaskDtoSearchParams,
  TaskDtoWithSpaces,
} from './task-api.typings';
import { API_PATH } from '../api.constants';
import { getTaskTrulyTypeValues } from './task-api.helpers';

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

    return this.httpClient
      .get<TaskDto[]>(`${API_PATH}/${TASK_API_PATH}`, {
        params: params,
        responseType: 'json',
      })
      .pipe(map((tasks) => tasks.map((task) => getTaskTrulyTypeValues(task))));
  }

  public getTask(id: TaskDto['id']): Observable<TaskDtoWithSpaces> {
    return this.httpClient
      .get<TaskDto>(`${API_PATH}/${TASK_API_PATH}/${id}`, {
        responseType: 'json',
      })
      .pipe(map((task) => getTaskTrulyTypeValues(task)));
  }

  public createTask(task: TaskDtoWithSpaces): Observable<TaskDto> {
    return this.httpClient.post<TaskDto>(`${API_PATH}/${TASK_API_PATH}`, task);
  }

  public removeTask(id: TaskDto['id']): Observable<TaskDto> {
    return this.httpClient.delete<TaskDto>(
      `${API_PATH}/${TASK_API_PATH}/${id}`
    );
  }

  public updateTask(
    id: TaskDto['id'],
    updateParams: Partial<TaskDtoWithSpaces>
  ): Observable<TaskDto> {
    console.log('update params: ', updateParams);
    return this.httpClient.patch<TaskDto>(
      `${API_PATH}/${TASK_API_PATH}/${id}`,
      updateParams
    );
  }
}
