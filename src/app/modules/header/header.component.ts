import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../services/user/user.typings';
import { HeaderService } from './header.service';

@Component({
  selector: 'dft-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [HeaderService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private headerService: HeaderService) {}

  public user$: Observable<User> = this.headerService.getUserInfo();
}
