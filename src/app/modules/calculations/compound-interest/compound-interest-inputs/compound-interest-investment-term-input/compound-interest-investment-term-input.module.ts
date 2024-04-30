import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoundInterestInvestmentTermInputComponent } from './compound-interest-investment-term-input.component';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [CompoundInterestInvestmentTermInputComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    TranslateModule,
    MatInputModule,
  ],
  exports: [CompoundInterestInvestmentTermInputComponent],
})
export class CompoundInterestInvestmentTermInputModule {}
