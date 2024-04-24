import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { DiaryAccordionComponent } from './diary-accordion.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CrossOutModule } from '../../../directives/cross-out/cross-out.module';
import { CompletedModule } from '../../../directives/completed/completed.module';
import { EllipsisModule } from '../../../directives/ellipsis/ellipsis.module';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DiaryAccordionComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    TranslateModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    CrossOutModule,
    CompletedModule,
    EllipsisModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [DiaryAccordionComponent],
})
export class DiaryAccordionModule {}
