import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  LANG_NAME_TO_TRANSLATION_KEY,
  Languages,
} from './language-selector.constants';

@Component({
  selector: 'dft-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectorComponent {
  public readonly languages = Object.values(Languages);
  public readonly langNamesTranslationsNames = LANG_NAME_TO_TRANSLATION_KEY;

  constructor(private translateService: TranslateService) {}

  public setLanguage(lang: Languages): void {
    this.translateService.use(lang);
  }
}
