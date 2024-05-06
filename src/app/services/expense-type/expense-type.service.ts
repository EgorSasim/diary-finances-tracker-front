import { Injectable } from '@angular/core';
import { ExpenseTypeApiService } from '../../api/expense-type/expense-type-api.service';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { ExpenseType, ExpenseTypeSearchParams } from './expense-type.typings';

@Injectable({ providedIn: 'root' })
export class ExpenseTypeService {
  public expenseTypeChange$: ReplaySubject<void> = new ReplaySubject(1);

  constructor(private expenseTypeApiService: ExpenseTypeApiService) {}

  public getExpenseType(id: ExpenseType['id']): Observable<ExpenseType> {
    return this.expenseTypeApiService.getExpenseType(id);
  }

  public getExpenseTypes(
    searchParams?: ExpenseTypeSearchParams
  ): Observable<ExpenseType[]> {
    return this.expenseTypeApiService.getExpenseTypes(searchParams);
  }

  public createExpenseType(expenseType: ExpenseType): Observable<ExpenseType> {
    return this.expenseTypeApiService
      .createExpenseType(expenseType)
      .pipe(tap(() => this.expenseTypeChange$.next()));
  }

  public removeExpenseType(id: ExpenseType['id']): Observable<ExpenseType> {
    return this.expenseTypeApiService
      .removeExpenseType(id)
      .pipe(tap(() => this.expenseTypeChange$.next()));
  }

  public updateExpenseType(
    id: ExpenseType['id'],
    updateParams: Partial<ExpenseType>
  ): Observable<ExpenseType> {
    return this.expenseTypeApiService
      .updateExpenseType(id, updateParams)
      .pipe(tap(() => this.expenseTypeChange$.next()));
  }
}
