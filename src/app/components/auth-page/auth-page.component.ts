import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignIn } from './sign-in/sign-in.typings';
import { SignUp } from './sign-up/sign-up.typings';

@Component({
  selector: 'dft-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent {
  public signIn(signInData: SignIn): void {
    console.log('sign in data: ', signInData);
  }

  public signUp(signUpData: SignUp): void {
    console.log('sing up data: ', signUpData);
  }
}
