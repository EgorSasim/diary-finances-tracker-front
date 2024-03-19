import { Injectable } from '@angular/core';
import { SignIn } from './sign-in/sign-in.typings';
import { Observable, tap } from 'rxjs';
import { AuthApiService } from '../../api/auth/auth-api.service';
import { AccessToken } from '../../services/token/token.typings';
import { SignUp } from './sign-up/sign-up.typings';
import { TokenService } from '../../services/token/token.service';

@Injectable()
export class AuthPageService {
  constructor(
    private authApiService: AuthApiService,
    private tokenService: TokenService
  ) {}

  public signIn(signInData: SignIn): Observable<AccessToken> {
    return this.authApiService.signIn(signInData);
  }

  public signUp(signUpData: SignUp): Observable<AccessToken> {
    return this.authApiService.signUp(signUpData);
  }
}
