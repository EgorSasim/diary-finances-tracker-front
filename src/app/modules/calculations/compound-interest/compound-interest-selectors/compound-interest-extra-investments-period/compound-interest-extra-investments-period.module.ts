import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { CompoundInterestExtraInvestmentsPeriodComponent } from './compound-interest-extra-investments-period.component';

@NgModule({
  declarations: [CompoundInterestExtraInvestmentsPeriodComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [CompoundInterestExtraInvestmentsPeriodComponent],
})
export class CompoundInterestExtraInvestmentsPeriodModule {}
