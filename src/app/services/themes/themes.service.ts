import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { DEFAULT_THEME, Theme } from './themes.constants';

@Injectable({ providedIn: 'root' })
export class ThemesService {
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.trackOverlayInsertion();
  }

  private trackOverlayInsertion(): void {
    const listener = (event: Event) => {
      const node = event.target as Element;
      if (
        node.nodeType === Node.ELEMENT_NODE &&
        node.className === 'cdk-overlay-container'
      ) {
        this.document
          .querySelector('.cdk-overlay-container')
          ?.setAttribute('li-theme', DEFAULT_THEME);
        this.document.body.removeEventListener('DOMNodeInserted', listener);
      }
    };

    this.document.body.addEventListener('DOMNodeInserted', listener);
  }

  public setTheme(theme: Theme): void {
    this.document
      .querySelector('li-theme-container')
      ?.setAttribute('li-theme', theme);
    this.document
      .querySelector('.cdk-overlay-container')
      ?.setAttribute('li-theme', theme);
  }
}
