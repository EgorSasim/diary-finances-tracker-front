import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from './user.typings';
import { UserApiService } from '../../api/user/user-api.service';
import { mapUserDtoToData } from './user.mappers';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private userApiService: UserApiService) {}

  public getUserInfo(): Observable<User> {
    return this.userApiService
      .getUserInfo()
      .pipe(map((userDto) => mapUserDtoToData(userDto)));
  }
}
