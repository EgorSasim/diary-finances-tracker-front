import { NgModule } from '@angular/core';
import { LanguageSelectorComponent } from './language-selector.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LanguageSelectorComponent],
  imports: [TranslateModule, MatMenuModule, MatIconModule],
  exports: [LanguageSelectorComponent],
})
export class LanguageSelectorModule {}
