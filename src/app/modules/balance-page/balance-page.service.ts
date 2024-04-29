import { DestroyRef, Injectable } from '@angular/core';
import { IncomeService } from '../../services/income/income.service';
import { ExpenseService } from '../../services/expense/expense.service';
import { Observable, combineLatest, map, startWith, switchMap } from 'rxjs';
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

@Injectable()
export class BalancePageService {
  constructor(
    private incomeService: IncomeService,
    private expenseService: ExpenseService,
    private destroyRef: DestroyRef
  ) {}

  public handleBalance(): Observable<number> {
    return combineLatest([this.handleExpenses(), this.handleIncomes()]).pipe(
      map(([expenses, incomes]) => getBalanceValue(expenses, incomes))
    );
  }

  public getIncomeToExpenseData(): Observable<IncomeToExpenseChartItem[]> {
    return combineLatest([this.handleExpenses(), this.handleIncomes()]).pipe(
      map(([expenses, incomes]) =>
        getIncomeToExpenseChartData(expenses, incomes)
      )
    );
  }

  public getExpenseToIncomeLineChartData(): Observable<
    ExpenseToIncomeLineChartItem[]
  > {
    return combineLatest([this.handleExpenses(), this.handleIncomes()]).pipe(
      map(([expenses, incomes]) =>
        getExpenseToIncomeLineChartData(expenses, incomes)
      )
    );
  }

  private handleIncomes(): Observable<Income[]> {
    return this.incomeService.incomesChange$.pipe(
      startWith(true),
      switchMap(() => this.incomeService.getIncomes()),
      takeUntilDestroyed(this.destroyRef)
    );
  }

  private handleExpenses(): Observable<Expense[]> {
    return this.expenseService.expensesChange$.pipe(
      startWith(true),
      switchMap(() => this.expenseService.getExpenses()),
      takeUntilDestroyed(this.destroyRef)
    );
  }
}
