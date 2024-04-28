import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeTypeSelectorComponent } from './income-type-selector.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [IncomeTypeSelectorComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    TranslateModule,
    MatInputModule,
  ],
  exports: [IncomeTypeSelectorComponent],
})
export class IncomeTypeSelectorModule {}
