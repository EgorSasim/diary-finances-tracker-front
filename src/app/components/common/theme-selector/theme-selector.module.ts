import { NgModule } from '@angular/core';
import { ThemeSelectorComponent } from './theme-selector.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ThemeSelectorComponent],
  imports: [MatIconModule, MatMenuModule, MatButtonModule, CommonModule],
  exports: [ThemeSelectorComponent],
})
export class ThemeSelectorModule {}
