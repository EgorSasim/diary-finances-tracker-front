import { AfterViewInit, Component } from '@angular/core';
import { SharedModule } from './shared.module';
import { ThemesService } from './services/themes/themes.service';
import { DEFAULT_THEME } from './services/themes/themes.constants';

@Component({
  selector: 'dft-root',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  constructor(private themesService: ThemesService) {}

  public ngAfterViewInit(): void {
    this.setDefaultTheme();
  }

  private setDefaultTheme(): void {
    this.themesService.setTheme(DEFAULT_THEME);
  }
}
