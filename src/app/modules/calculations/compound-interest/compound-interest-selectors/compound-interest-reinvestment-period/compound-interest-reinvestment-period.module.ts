import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoundInterestReinvestmentPeriodComponent } from './compound-interest-reinvestment-period.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CompoundInterestReinvestmentPeriodComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [CompoundInterestReinvestmentPeriodComponent],
})
export class CompoundInterestReinvestmentPeriodModule {}
