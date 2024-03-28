import { ChangeDetectionStrategy, Component, DestroyRef } from '@angular/core';
import { SignIn } from './sign-in/sign-in.typings';
import { SignUp } from './sign-up/sign-up.typings';
import { AuthPageService } from './auth-page.service';
import { BehaviorSubject, tap, finalize } from 'rxjs';
import { AuthApiService } from '../../api/auth/auth-api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TokenService } from '../../services/token/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dft-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',
  providers: [AuthApiService, AuthPageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent {
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private authPageService: AuthPageService,
    private destroyRef: DestroyRef,
    private tokenService: TokenService,
    private router: Router
  ) {}

  public signIn(signInData: SignIn): void {
    this.isLoading$.next(true);
    this.authPageService
      .signIn(signInData)
      .pipe(
        tap(() => this.isLoading$.next(true)),
        finalize(() => this.isLoading$.next(false)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (token) => {
          this.tokenService.setToken(token);
        },
      });
  }

  public signUp(signUpData: SignUp): void {
    this.isLoading$.next(true);
    this.authPageService
      .signUp(signUpData)
      .pipe(
        tap(() => this.isLoading$.next(true)),
        finalize(() => this.isLoading$.next(false)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (token) => {
          this.tokenService.setToken(token);
        },
      });
  }

  private navigateToHomePage() {
    this.router.navigate(['/home']);
  }
}
