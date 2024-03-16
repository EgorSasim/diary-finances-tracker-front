import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignIn } from '../../modules/auth-page/sign-in/sign-in.typings';
import { API_PATH } from '../api.constants';
import { AccessToken } from '../../services/token/token.typings';
import {
  AUTH_API_PATH,
  AUTH_SIGN_IN_PATH,
  AUTH_SIGN_UP_PATH,
} from './auth-api.constants';
import { SignUp } from '../../modules/auth-page/sign-up/sign-up.typings';

@Injectable()
export class AuthApiService {
  constructor(private httpClient: HttpClient) {}

  public signIn(signInData: SignIn): Observable<AccessToken> {
    return this.httpClient.post(
      API_PATH + '/' + AUTH_API_PATH + '/' + AUTH_SIGN_IN_PATH,
      signInData,
      {
        responseType: 'json',
      }
    ) as Observable<AccessToken>;
  }

  public signUp(signUpData: SignUp): Observable<AccessToken> {
    return this.httpClient.post(
      API_PATH + '/' + AUTH_API_PATH + '/' + AUTH_SIGN_UP_PATH,
      signUpData,
      { responseType: 'json' }
    ) as Observable<AccessToken>;
  }
}
