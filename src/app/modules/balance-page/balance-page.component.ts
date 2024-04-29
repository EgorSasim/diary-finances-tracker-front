import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BalancePageService } from './balance-page.service';
import { Observable } from 'rxjs';
import {
  ExpenseToIncomeLineChartItem,
  IncomeToExpenseChartItem,
} from './balance-page.typings';
import {
  INCOME_TO_EXPENSE_CHART_SETTINGS,
  INCOME_TO_EXPENSE_LINE_CHART_SETTINGS,
} from './balance-page.constants';

@Component({
  selector: 'dft-balance-page',
  templateUrl: './balance-page.component.html',
  styleUrl: './balance-page.component.scss',
  providers: [BalancePageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalancePageComponent {
  public balance$: Observable<number> = this.balancePageService.handleBalance();
  public incomesToExpensesData$: Observable<IncomeToExpenseChartItem[]> =
    this.balancePageService.getIncomeToExpenseData();
  public readonly incomesToExpensesChartSettings: typeof INCOME_TO_EXPENSE_CHART_SETTINGS =
    INCOME_TO_EXPENSE_CHART_SETTINGS;

  public incomesToExpensesChartData$: Observable<
    ExpenseToIncomeLineChartItem[]
  > = this.balancePageService.getExpenseToIncomeLineChartData();
  public readonly incomesToExpensesLineChartSettings: typeof INCOME_TO_EXPENSE_LINE_CHART_SETTINGS =
    INCOME_TO_EXPENSE_LINE_CHART_SETTINGS;

  constructor(private balancePageService: BalancePageService) {}
}
