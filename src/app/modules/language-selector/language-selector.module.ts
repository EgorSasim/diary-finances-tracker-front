import { NgModule } from '@angular/core';
import { LanguageSelectorComponent } from './language-selector.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LanguageSelectorComponent],
  imports: [TranslateModule, MatMenuModule, MatIconModule, MatButtonModule],
  exports: [LanguageSelectorComponent],
})
export class LanguageSelectorModule {}
