import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../services/user/user.typings';
import { HeaderService } from './header.service';
import { TokenService } from '../../services/token/token.service';
import { Router } from '@angular/router';
import { ROUTE_PATH } from '../../constants/routes-pathes';

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
    private router: Router
  ) {}

  public user$: Observable<User> = this.headerService.getUserInfo();

  public logOut(): void {
    this.tokenService.removeToken();
    this.router.navigate([ROUTE_PATH.auth]);
  }
}
