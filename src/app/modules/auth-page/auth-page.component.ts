import { ChangeDetectionStrategy, Component, DestroyRef } from '@angular/core';
import { SignIn } from './sign-in/sign-in.typings';
import { SignUp } from './sign-up/sign-up.typings';
import { AuthPageService } from './auth-page.service';
import { BehaviorSubject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TokenService } from '../../services/token/token.service';
import { NavigationService } from '../../services/navigation/navigation.service';

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
    private navigationService: NavigationService
  ) {}

  public signIn(signInData: SignIn): void {
    this.isLoading$.next(true);
    this.authPageService
      .signIn(signInData)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (token) => {
          this.tokenService.setToken(token);
          this.navigateToHomePage();
        },
        complete: () => {
          this.isLoading$.next(false);
        },
      });
  }

  public signUp(signUpData: SignUp): void {
    this.isLoading$.next(true);
    this.authPageService
      .signUp(signUpData)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (token) => {
          this.tokenService.setToken(token);
          this.navigateToHomePage();
        },
        complete: () => {
          this.isLoading$.next(false);
        },
      });
  }

  private navigateToHomePage() {
    this.navigationService.goToHomePage();
  }
}
