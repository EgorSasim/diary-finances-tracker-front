import { ChangeDetectionStrategy, Component, DestroyRef } from '@angular/core';
import { SignIn } from './sign-in/sign-in.typings';
import { SignUp } from './sign-up/sign-up.typings';
import { AuthPageService } from './auth-page.service';
import { BehaviorSubject, tap, finalize } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TokenService } from '../../services/token/token.service';
import { Router } from '@angular/router';
import { ROUTE_PATH } from '../../constants/routes-pathes';

@Component({
  selector: 'dft-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',
  providers: [AuthPageService],
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
          this.navigateToHomePage();
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
          this.navigateToHomePage();
        },
      });
  }

  private navigateToHomePage() {
    this.router.navigate([ROUTE_PATH.withHeader, ROUTE_PATH.home]);
  }
}
