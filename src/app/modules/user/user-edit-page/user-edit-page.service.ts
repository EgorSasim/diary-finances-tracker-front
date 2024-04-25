import { Injectable } from '@angular/core';
import { User, UserEdit } from '../../../services/user/user.typings';
import { UserService } from '../../../services/user/user.service';
import { Observable } from 'rxjs';

@Injectable()
export class UserEditPageService {
  constructor(private userService: UserService) {}

  public getUserInfo(): Observable<User> {
    return this.userService.getUserInfo();
  }

  public updateUser(user: UserEdit): Observable<User> {
    return this.userService.updateUser(user);
  }
}
