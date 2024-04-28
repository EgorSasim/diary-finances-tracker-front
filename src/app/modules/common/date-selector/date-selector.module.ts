import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateSelectorComponent } from './date-selector.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [DateSelectorComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    TranslateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  exports: [DateSelectorComponent],
})
export class DateSelectorModule {}
