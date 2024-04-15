import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpForm } from './sign-up.typings';

@Injectable()
export class SignUpBuiler {
  public createFormGroup(): FormGroup<SignUpForm> {
    return new FormGroup({
      login: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }
}
