import { AfterViewInit, Component } from '@angular/core';
import { SharedModule } from './shared.module';
import { TmpModule } from './components/tmp/tmp.module';
import { ThemesService } from './common/services/themes/themes.service';

@Component({
  selector: 'dft-root',
  standalone: true,
  imports: [SharedModule, TmpModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  constructor(private themesService: ThemesService) {}

  public ngAfterViewInit(): void {
    this.themesService.setDefaultThemeColor();
  }
}
