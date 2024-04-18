import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDateRangeSelectorComponent } from './task-date-range-selector.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskDateRangeSelectorComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
  exports: [TaskDateRangeSelectorComponent],
})
export class TaskDateRangeSelectorModule {}
