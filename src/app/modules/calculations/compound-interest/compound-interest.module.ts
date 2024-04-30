import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoundInterestComponent } from './compound-interest.component';
import { CompoundInterestCalculationSelectorModule } from './compound-interest-selectors/compound-interest-calculation-selector/compound-interest-calculation-selector.module';
import { CopmoundInterestFinalAmountModule } from './copmound-interest-final-amount/copmound-interest-final-amount.module';

@NgModule({
  declarations: [CompoundInterestComponent],
  imports: [
    CommonModule,
    CompoundInterestCalculationSelectorModule,
    CopmoundInterestFinalAmountModule,
  ],
  exports: [CompoundInterestComponent],
})
export class CompoundInterestModule {}
