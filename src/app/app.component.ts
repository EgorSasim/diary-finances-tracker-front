import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SharedTranslateModule } from './shared-translate.module';
import { ThemesService } from './services/themes/themes.service';
import { DEFAULT_THEME } from './services/themes/themes.constants';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxMaterialThemingModule } from '@lithiumjs/ngx-material-theming';
import { SnackBarModule } from './modules/common/snack-bar/snack-bar.module';

@Component({
  selector: 'dft-root',
  standalone: true,
  imports: [
    SharedTranslateModule,
    RouterOutlet,
    CommonModule,
    NgxMaterialThemingModule,
    SnackBarModule,
  ],
  providers: [TranslateService],
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
