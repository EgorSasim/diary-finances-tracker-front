import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopmoundInterestFinalAmountComponent } from './copmound-interest-final-amount.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CompoundInterestReinvestmentPeriodModule } from '../compound-interest-selectors/compound-interest-reinvestment-period-selector/compound-interest-reinvestment-period.module';
import { CompoundInterestInvestmentTermModule } from '../compound-interest-selectors/compound-interest-investment-term-selector/compound-interest-investment-term.module';
import { CompoundInterestExtraInvestmentsPeriodModule } from '../compound-interest-selectors/compound-interest-extra-investments-period-selector/compound-interest-extra-investments-period.module';
import { CompoundInterestStartUpCapitalInputModule } from '../compound-interest-inputs/compound-interest-start-up-capital-input/compound-interest-start-up-capital-input.module';
import { CompoundInterestInvestmentTermInputModule } from '../compound-interest-inputs/compound-interest-investment-term-input/compound-interest-investment-term-input.module';
import { CompoundInterestBidInputModule } from '../compound-interest-inputs/compound-interest-bid-input/compound-interest-bid-input.module';
import { CompoundExtraInvestmentsInputModule } from '../compound-interest-inputs/compound-extra-investments-input/compound-extra-investments-input.module';
import { CompoundInterestAnalysisChartModule } from '../compound-interest-charts/compound-interest-analysis-chart/compound-interest-analysis-chart.module';
import { CompoundInterestGrowthChartModule } from '../compound-interest-charts/compound-interest-growth-chart/compound-interest-growth-chart.module';

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
    CompoundInterestStartUpCapitalInputModule,
    CompoundInterestInvestmentTermInputModule,
    CompoundInterestBidInputModule,
    CompoundExtraInvestmentsInputModule,
    CompoundInterestAnalysisChartModule,
    CompoundInterestGrowthChartModule,
  ],
  exports: [CopmoundInterestFinalAmountComponent],
})
export class CopmoundInterestFinalAmountModule {}
