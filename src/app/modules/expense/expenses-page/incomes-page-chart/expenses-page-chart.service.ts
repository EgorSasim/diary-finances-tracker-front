import { DestroyRef, Injectable } from '@angular/core';
import { ExpenseService } from '../../../../services/expense/expense.service';
import { Observable, combineLatest, map, startWith, switchMap } from 'rxjs';
import { Expense } from '../../../../services/expense/expense.typings';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { TranslateService } from '@ngx-translate/core';
import {
  ExpenseAmountChartData,
  ExpenseTypeChartData,
} from './expenses-page-chart.typings';

@Injectable()
export class ExpensesPageChartService {
  constructor(
    private expenseService: ExpenseService,
    private destroyRef: DestroyRef,
    private translateService: TranslateService
  ) {}

  private handleExpenses(): Observable<Expense[]> {
    return this.expenseService.expensesChange$.pipe(
      startWith(true),
      switchMap(() => this.expenseService.getExpenses()),
      takeUntilDestroyed(this.destroyRef)
    );
  }

  public getExpensesAmountChartData(): Observable<ExpenseAmountChartData[]> {
    return this.handleExpenses().pipe(
      map((expenses) =>
        expenses.reduce((amountData: ExpenseAmountChartData[], expense) => {
          if (!amountData.find((data) => data.name === expense.date)) {
            amountData.push({
              name: expense.date,
              value: expense.amount,
            });
            return amountData;
          }
          const expenseItem = amountData.find(
            (data) => data.name === expense.date
          ) as ExpenseAmountChartData;
          expenseItem.value = +expenseItem.value + +expense.amount;
          return amountData;
        }, [] as ExpenseAmountChartData[])
      ),
      map((expenseData) =>
        expenseData.sort(
          (expense1, expense2) =>
            new Date(expense1.name).getTime() -
            new Date(expense2.name).getTime()
        )
      )
    );
  }

  public getExpenseTypesChartData(): Observable<ExpenseTypeChartData[]> {
    return combineLatest([
      this.handleExpenses(),
      this.translateService.onLangChange.pipe(startWith(true)),
    ]).pipe(
      map(([expensesData]) =>
        expensesData.reduce((acc: ExpenseTypeChartData[], item) => {
          const accItem = acc.find((accItem) => accItem.name === item.type);
          if (!accItem) {
            acc.push({
              name: item.type || 'No type',
              value: item.amount,
            });
          } else {
            accItem.value = +accItem.value + +item.amount;
          }
          return acc;
        }, [])
      )
    );
  }
}
