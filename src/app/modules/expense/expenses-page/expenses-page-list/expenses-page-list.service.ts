import { DestroyRef, Injectable } from '@angular/core';
import { ExpenseService } from '../../../../services/expense/expense.service';
import { BehaviorSubject, Observable, merge, startWith, switchMap } from 'rxjs';
import {
  Expense,
  ExpenseSearchParams,
} from '../../../../services/expense/expense.typings';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable()
export class ExpensesPageListService {
  public searchParams$: BehaviorSubject<ExpenseSearchParams> =
    new BehaviorSubject({});
  public prevSearchParamsValue: ExpenseSearchParams = {};

  constructor(
    private expenseService: ExpenseService,
    private destroyRef: DestroyRef
  ) {}

  public handleExpenses(): Observable<Expense[]> {
    return merge(this.searchParams$, this.expenseService.expensesChange$).pipe(
      switchMap((searchParams) => {
        if (searchParams) {
          this.prevSearchParamsValue = { ...searchParams };
        }
        return this.expenseService.getExpenses(
          searchParams || this.prevSearchParamsValue
        );
      }),
      takeUntilDestroyed(this.destroyRef)
    );
  }

  public removeExpense(id: Expense['id']): Observable<Expense> {
    return this.expenseService.removeExpense(id);
  }

  public searchParamsChange(params: ExpenseSearchParams): void {
    this.searchParams$.next(params);
  }
}
