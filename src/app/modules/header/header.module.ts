import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeSelectorModule } from '../theme-selector/theme-selector.module';
import { LanguageSelectorModule } from '../language-selector/language-selector.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    MatToolbarModule,
    RouterOutlet,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    TranslateModule,
    ThemeSelectorModule,
    LanguageSelectorModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
