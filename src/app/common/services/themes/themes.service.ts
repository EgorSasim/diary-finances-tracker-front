import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Theme } from './themes.constants';

@Injectable({ providedIn: 'root' })
export class ThemesService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  public setTheme(theme: Theme): void {
    this.document.body
      .querySelector('li-theme-container')
      ?.setAttribute('li-theme', theme);
  }
}
