import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User, UserEditForm } from '../../../services/user/user.typings';
import { oldNewPasswordValidator } from '../../../validators/validators';

@Injectable()
export class UserEditPageBuilder {
  public createFormGroup(user: User): FormGroup<UserEditForm> {
    return new FormGroup<UserEditForm>(
      {
        email: new FormControl(user.email, [
          Validators.email,
          Validators.required,
        ]),
        oldPassword: new FormControl(null),
        newPassword: new FormControl(null),
      },
      [oldNewPasswordValidator()]
    );
  }
}
