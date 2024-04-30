import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { CompoundInterestExtraInvestmentsPeriodSelectorComponent } from './compound-interest-extra-investments-period-selector.component';

@NgModule({
  declarations: [CompoundInterestExtraInvestmentsPeriodSelectorComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [CompoundInterestExtraInvestmentsPeriodSelectorComponent],
})
export class CompoundInterestExtraInvestmentsPeriodModule {}
