import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IncomesPageChartService } from './incomes-page-chart.service';
import {
  INCOME_AMOUNT_CHART_OPTIONS,
  getIncomesTypesPercentageChartOptions,
} from './incomes-page-chart.constants';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dft-incomes-page-chart',
  templateUrl: './incomes-page-chart.component.html',
  styleUrl: './incomes-page-chart.component.scss',
  providers: [IncomesPageChartService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomesPageChartComponent {
  public incomesAmountChartData$ =
    this.incomesPageChartService.getIncomesAmountChartData();
  public readonly incomeAmountChartOptions: typeof INCOME_AMOUNT_CHART_OPTIONS =
    INCOME_AMOUNT_CHART_OPTIONS;
  public incomeTypeChartData$ =
    this.incomesPageChartService.getIncomeTypesChartData();
  public readonly incomeTypesPersentageChartOptions =
    getIncomesTypesPercentageChartOptions(this.translateService);

  constructor(
    private incomesPageChartService: IncomesPageChartService,
    private translateService: TranslateService
  ) {}
}
