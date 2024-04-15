import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignInForm } from './sign-in.typings';

export class SignInBuiler {
  public createFormGroup(): FormGroup<SignInForm> {
    return new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
