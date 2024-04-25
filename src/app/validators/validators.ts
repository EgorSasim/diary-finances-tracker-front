import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { UserEditForm } from '../services/user/user.typings';
import { FormErrorCode } from '../typings/forms';

export function oldNewPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const form = control as FormGroup<UserEditForm>;
    const oldPassword = form.controls.oldPassword.value;
    const newPassword = form.controls.newPassword.value;

    if (!oldPassword && newPassword) {
      form.controls.newPassword.setErrors({ err: true });
      return { [FormErrorCode.OldNewPassword]: true };
    }

    form.controls.newPassword.setErrors(null);
    return null;
  };
}
