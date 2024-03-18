import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, takeUntil, tap } from 'rxjs';
import { SignIn } from '../../modules/auth-page/sign-in/sign-in.typings';
import { API_PATH } from '../api.constants';
import {
  AUTH_API_PATH,
  AUTH_SIGN_IN_PATH,
  AUTH_SIGN_UP_PATH,
} from './auth-api.constants';
import { SignUp } from '../../modules/auth-page/sign-up/sign-up.typings';
import { TokenService } from '../../services/token/token.service';
import { AccessToken } from '../../services/token/token.typings';

@Injectable()
export class AuthApiService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  public signIn(signInData: SignIn): Observable<AccessToken> {
    return this.httpClient
      .post<AccessToken>(
        API_PATH + '/' + AUTH_API_PATH + '/' + AUTH_SIGN_IN_PATH,
        signInData,
        {
          responseType: 'json',
        }
      )
      .pipe(tap((token: AccessToken) => this.tokenService.setToken(token)));
  }

  public signUp(signUpData: SignUp): Observable<AccessToken> {
    return this.httpClient.post<AccessToken>(
      API_PATH + '/' + AUTH_API_PATH + '/' + AUTH_SIGN_UP_PATH,
      signUpData,
      { responseType: 'json' }
    );
  }
}
