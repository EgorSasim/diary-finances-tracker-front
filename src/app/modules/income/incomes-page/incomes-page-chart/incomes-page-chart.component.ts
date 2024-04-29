import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IncomesPageChartService } from './incomes-page-chart.service';
import {
  INCOMES_TYPES_PERCENTAGE_CHART_OPTIONS,
  INCOME_AMOUNT_CHART_OPTIONS,
} from './incomes-page-chart.constants';

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
  public readonly incomeTypesPersentageChartOptions: typeof INCOMES_TYPES_PERCENTAGE_CHART_OPTIONS =
    INCOMES_TYPES_PERCENTAGE_CHART_OPTIONS;

  constructor(private incomesPageChartService: IncomesPageChartService) {}
}
