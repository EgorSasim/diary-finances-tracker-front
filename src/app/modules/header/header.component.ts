import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../services/user/user.typings';
import { HeaderService } from './header.service';
import { TokenService } from '../../services/token/token.service';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'dft-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [HeaderService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(
    private headerService: HeaderService,
    private tokenService: TokenService,
    private navigationService: NavigationService
  ) {}

  public user$: Observable<User> = this.headerService.getUserInfo();

  public goToUserEditPage(): void {
    this.navigationService.goToUserEditPage();
  }

  public logOut(): void {
    this.tokenService.removeToken();
    this.navigationService.goToAuthPage();
  }
}
