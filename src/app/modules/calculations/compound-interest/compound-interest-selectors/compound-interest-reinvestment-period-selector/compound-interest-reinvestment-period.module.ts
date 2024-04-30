import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoundInterestReinvestmentPeriodSelectorComponent } from './compound-interest-reinvestment-period-selector.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CompoundInterestReinvestmentPeriodSelectorComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [CompoundInterestReinvestmentPeriodSelectorComponent],
})
export class CompoundInterestReinvestmentPeriodModule {}
