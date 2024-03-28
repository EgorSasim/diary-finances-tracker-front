import { Injectable } from '@angular/core';
import { UserApiService } from '../../api/user/user-api.service';
import { UserService } from '../../services/user/user.service';

@Injectable()
export class HomePageService {
  constructor(private userService: UserService) {
    console.log('init service');
    this.userService
      .getUserInfo()
      .subscribe((info) => console.log('info: ', info));
  }
}
