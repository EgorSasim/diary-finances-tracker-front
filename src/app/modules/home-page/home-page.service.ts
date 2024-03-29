import { Injectable } from '@angular/core';
import { UserApiService } from '../../api/user/user-api.service';
import { UserService } from '../../services/user/user.service';
import { Observable } from 'rxjs';
import { User } from '../../services/user/user.typings';

@Injectable()
export class HomePageService {
  constructor(private userService: UserService) {}

  public getUserInfo(): Observable<User> {
    return this.userService.getUserInfo();
  }
}