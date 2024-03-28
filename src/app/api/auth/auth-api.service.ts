import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from '../api.constants';
import {
  AUTH_API_PATH,
  AUTH_SIGN_IN_PATH,
  AUTH_SIGN_UP_PATH,
} from './auth-api.constants';
import { AccessToken } from '../../services/token/token.typings';
import {
  AccessTokenDto,
  SignInDto,
  SignUpDto,
} from './auth-api.service.typings';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  constructor(private httpClient: HttpClient) {}

  public signIn(signInData: SignInDto): Observable<AccessTokenDto> {
    return this.httpClient.post<AccessTokenDto>(
      API_PATH + '/' + AUTH_API_PATH + '/' + AUTH_SIGN_IN_PATH,
      signInData,
      {
        responseType: 'json',
      }
    );
  }

  public signUp(signUpData: SignUpDto): Observable<AccessTokenDto> {
    return this.httpClient.post<AccessTokenDto>(
      API_PATH + '/' + AUTH_API_PATH + '/' + AUTH_SIGN_UP_PATH,
      signUpData,
      { responseType: 'json' }
    );
  }
}
