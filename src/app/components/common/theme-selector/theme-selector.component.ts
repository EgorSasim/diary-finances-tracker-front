import { ChangeDetectionStrategy, Component } from '@angular/core';
import { THEMES_INFO } from './theme-selector.constants';
import { Theme } from '../../../common/services/themes/themes.constants';
import { ThemesService } from '../../../common/services/themes/themes.service';

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

  public changeTheme(theme: string): void {
    console.log('theme: ', theme);
    this.setTheme(theme as Theme);
  }

  private setTheme(theme: Theme): void {
    this.themesService.setTheme(theme);
  }
}
