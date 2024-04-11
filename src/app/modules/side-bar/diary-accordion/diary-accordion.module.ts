import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { DiaryAccordionComponent } from './diary-accordion.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@NgModule({
  declarations: [DiaryAccordionComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    TranslateModule,
    MatIconModule,
    MatButton,
  ],
  exports: [DiaryAccordionComponent],
})
export class DiaryAccordionModule {}
