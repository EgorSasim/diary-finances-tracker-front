import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopmoundInterestFinalAmountComponent } from './copmound-interest-final-amount.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CompoundInterestReinvestmentPeriodModule } from '../compound-interest-selectors/compound-interest-reinvestment-period/compound-interest-reinvestment-period.module';
import { CompoundInterestInvestmentTermModule } from '../compound-interest-selectors/compound-interest-investment-term/compound-interest-investment-term.module';
import { CompoundInterestExtraInvestmentsPeriodModule } from '../compound-interest-selectors/compound-interest-extra-investments-period/compound-interest-extra-investments-period.module';

@NgModule({
  declarations: [CopmoundInterestFinalAmountComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    CompoundInterestReinvestmentPeriodModule,
    CompoundInterestInvestmentTermModule,
    CompoundInterestExtraInvestmentsPeriodModule,
    MatButtonModule,
  ],
  exports: [CopmoundInterestFinalAmountComponent],
})
export class CopmoundInterestFinalAmountModule {}
