import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignInForm } from './sign-in.typings';

export class SignInBuiler {
  public createFormGroup(): FormGroup<SignInForm> {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
