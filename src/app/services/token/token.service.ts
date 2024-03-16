import { Injectable } from '@angular/core';
import { AccessToken } from './token.typings';

@Injectable({ providedIn: 'root' })
export class TokenService {
  public getToken(): AccessToken {
    return { token: localStorage.getItem('token') || '' };
  }

  public setToken(token: AccessToken): void {
    localStorage.setItem('token', token.token);
  }
}
