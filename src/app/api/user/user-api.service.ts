import { Injectable } from '@angular/core';
import { UserDto } from './user-api.typings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_PATH } from '../api.constants';
import { USER_API_PATH } from './user-api.constants';
import { UserEdit } from '../../services/user/user.typings';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private httpClient: HttpClient) {}

  public getUserInfo(): Observable<UserDto> {
    return this.httpClient.get<UserDto>(`${API_PATH}/${USER_API_PATH}`, {
      responseType: 'json',
    });
  }

  public updateUser(user: UserEdit): Observable<UserDto> {
    return this.httpClient.post<UserDto>(`${API_PATH}/${USER_API_PATH}`, user, {
      responseType: 'json',
    });
  }
}
