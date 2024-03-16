import { ChangeDetectionStrategy, Component, DestroyRef } from '@angular/core';
import { SignIn } from './sign-in/sign-in.typings';
import { SignUp } from './sign-up/sign-up.typings';
import { AuthPageService } from './auth-page.service';
import { BehaviorSubject, tap } from 'rxjs';
import { AuthApiService } from '../../api/auth/auth-api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'dft-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',
  providers: [AuthApiService, AuthPageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent {
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private authPageService: AuthPageService,
    private destroyRef: DestroyRef
  ) {}

  public signIn(signInData: SignIn): void {
    this.isLoading.next(true);
    this.authPageService
      .signIn(signInData)
      .pipe(
        tap(() => this.isLoading.next(true)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  public signUp(signUpData: SignUp): void {
    this.isLoading.next(true);
    this.authPageService
      .signUp(signUpData)
      .pipe(tap(() => this.isLoading.next(true)))
      .subscribe();
  }
}
