import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExpensesPageChartService } from './expenses-page-chart.service';
import {
  EXPENSE_AMOUNT_CHART_OPTIONS,
  getExpensesTypesPercentageChartOptions,
} from './expenses-page-chart.constants';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dft-expenses-page-chart',
  templateUrl: './expenses-page-chart.component.html',
  styleUrl: './expenses-page-chart.component.scss',
  providers: [ExpensesPageChartService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesPageChartComponent {
  public expensesAmountChartData$ =
    this.expensesPageChartService.getExpensesAmountChartData();
  public readonly expenseAmountChartOptions: typeof EXPENSE_AMOUNT_CHART_OPTIONS =
    EXPENSE_AMOUNT_CHART_OPTIONS;
  public expenseTypeChartData$ =
    this.expensesPageChartService.getExpenseTypesChartData();
  public readonly expenseTypesPersentageChartOptions =
    getExpensesTypesPercentageChartOptions(this.translateService);

  constructor(
    private expensesPageChartService: ExpensesPageChartService,
    private translateService: TranslateService
  ) {}
}
