import { ChangeDetectionStrategy, Component } from '@angular/core';
import { THEMES_INFO } from './theme-selector.constants';
import { ThemesService } from '../../services/themes/themes.service';
import { Theme } from '../../services/themes/themes.constants';

@Component({
  selector: 'dft-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSelectorComponent {
  public readonly themesInfoKeys = Object.keys(THEMES_INFO);
  public readonly themesInfoValues = Object.values(THEMES_INFO);

  constructor(private themesService: ThemesService) {}

  public setTheme(theme: string): void {
    this.themesService.setTheme(theme as Theme);
  }
}
