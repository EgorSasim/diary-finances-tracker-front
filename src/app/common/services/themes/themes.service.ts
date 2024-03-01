import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { DEFAULT_THEME_NAME, ThemeNames } from './themes.constants';

@Injectable({ providedIn: 'root' })
export class ThemesService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  public setDefaultThemeColor(): void {
    this.document.body
      .querySelector('li-theme-container')
      ?.setAttribute('li-theme', DEFAULT_THEME_NAME);
  }
}
