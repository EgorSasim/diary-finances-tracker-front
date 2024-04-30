import { DestroyRef, Injectable } from '@angular/core';
import { IncomeService } from '../../services/income/income.service';
import { ExpenseService } from '../../services/expense/expense.service';
import {
  Observable,
  combineLatest,
  map,
  merge,
  startWith,
  switchMap,
} from 'rxjs';
import { Income } from '../../services/income/income.typings';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Expense } from '../../services/expense/expense.typings';
import {
  ExpenseToIncomeLineChartItem,
  ExpenseToIncomeLineChartItemSerie,
  IncomeToExpenseChartItem,
} from './balance-page.typings';
import {
  getBalanceValue,
  getExpenseToIncomeLineChartData,
  getIncomeToExpenseChartData,
} from './balance-page.helpers';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class BalancePageService {
  constructor(
    private incomeService: IncomeService,
    private expenseService: ExpenseService,
    private destroyRef: DestroyRef,
    private translateService: TranslateService
  ) {}

  public handleBalance(): Observable<number> {
    return combineLatest([this.handleExpenses(), this.handleIncomes()]).pipe(
      map(([expenses, incomes]) => getBalanceValue(expenses, incomes))
    );
  }

  public getIncomeToExpenseData(): Observable<IncomeToExpenseChartItem[]> {
    return combineLatest([this.handleExpenses(), this.handleIncomes()]).pipe(
      map(([expenses, incomes]) =>
        getIncomeToExpenseChartData(expenses, incomes, this.translateService)
      )
    );
  }

  public getExpenseToIncomeLineChartData(): Observable<
    ExpenseToIncomeLineChartItem[]
  > {
    return combineLatest([this.handleExpenses(), this.handleIncomes()]).pipe(
      map(([expenses, incomes]) =>
        getExpenseToIncomeLineChartData(
          expenses,
          incomes,
          this.translateService
        )
      )
    );
  }

  private handleIncomes(): Observable<Income[]> {
    return merge(
      this.incomeService.incomesChange$,
      this.translateService.onLangChange
    ).pipe(
      startWith(true),
      switchMap(() => this.incomeService.getIncomes()),
      takeUntilDestroyed(this.destroyRef)
    );
  }

  private handleExpenses(): Observable<Expense[]> {
    return merge(
      this.expenseService.expensesChange$,
      this.translateService.onLangChange
    ).pipe(
      startWith(true),
      switchMap(() => this.expenseService.getExpenses()),
      takeUntilDestroyed(this.destroyRef)
    );
  }
}
