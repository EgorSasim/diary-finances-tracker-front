import { Injectable } from '@angular/core';
import { AccessToken } from './token.typings';
import { ACCESS_TOKEN_NAME } from './token.constants';

@Injectable({ providedIn: 'root' })
export class TokenService {
  public getToken(): string {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_NAME) || '';
    return accessToken;
  }

  public setToken(token: AccessToken): void {
    localStorage.setItem(ACCESS_TOKEN_NAME, token.accessToken);
  }
}
