import { Injectable } from '@angular/core';
import { Expense, ExpenseSearchParams } from './expense.typings';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { ExpenseApiService } from '../../api/expense/expense-api.service';
import { getExpenseTruthyTypes } from './expense.helpers';

@Injectable({ providedIn: 'root' })
export class ExpenseService {
  public expensesChange$: ReplaySubject<void> = new ReplaySubject(1);

  constructor(private expenseApiService: ExpenseApiService) {}

  public getExpense(id: Expense['id']): Observable<Expense> {
    return this.expenseApiService.getExpense(id);
  }

  public getExpenses(
    searchParams?: ExpenseSearchParams
  ): Observable<Expense[]> {
    return this.expenseApiService.getExpenses(
      searchParams as ExpenseSearchParams
    );
  }

  public createExpense(expense: Expense): Observable<Expense> {
    return this.expenseApiService
      .createExpense(getExpenseTruthyTypes(expense))
      .pipe(tap(() => this.expensesChange$.next()));
  }

  public removeExpense(id: Expense['id']): Observable<Expense> {
    return this.expenseApiService
      .removeExpense(id)
      .pipe(tap(() => this.expensesChange$.next()));
  }

  public updateExpense(
    id: Expense['id'],
    updateParams: Partial<Expense>
  ): Observable<Expense> {
    return this.expenseApiService
      .updateExpense(id, getExpenseTruthyTypes(updateParams as Expense))
      .pipe(tap(() => this.expensesChange$.next()));
  }
}
