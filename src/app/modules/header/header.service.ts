import { Injectable } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../services/user/user.typings';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderService {
  constructor(private userService: UserService) {}

  public getUserInfo(): Observable<User> {
    return this.userService.getUserInfo();
  }
}
