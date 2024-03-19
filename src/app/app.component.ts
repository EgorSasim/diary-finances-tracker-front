import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ThemesService } from './services/themes/themes.service';
import { DEFAULT_THEME } from './services/themes/themes.constants';

@Component({
  selector: 'dft-root',
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
