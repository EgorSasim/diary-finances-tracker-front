import { Injectable } from '@angular/core';
import { SignIn } from '../../modules/auth-page/sign-in/sign-in.typings';
import { AccessToken } from '../token/token.typings';
import { Observable, map } from 'rxjs';
import { AuthApiService } from '../../api/auth/auth-api.service';
import { SignUp } from '../../modules/auth-page/sign-up/sign-up.typings';
import { mapSignInDataToDto, mapSignUpDataToDto } from './auth.mappers';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private authApiService: AuthApiService) {}

  public signIn(signInData: SignIn): Observable<AccessToken> {
    return this.authApiService
      .signIn(mapSignInDataToDto(signInData))
      .pipe(map((accessTokenDto) => accessTokenDto.accessToken));
  }

  public signUp(signUpData: SignUp): Observable<AccessToken> {
    return this.authApiService
      .signUp(mapSignUpDataToDto(signUpData))
      .pipe(map((accessTokenDto) => accessTokenDto.accessToken));
  }
}
