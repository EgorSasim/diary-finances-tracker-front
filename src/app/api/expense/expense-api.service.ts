import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExpenseDto } from './expense-api.typings';
import { Observable, map } from 'rxjs';
import { API_PATH } from '../api.constants';
import { getExpenseTruthyTypes } from './expense-api.helpers';
import { EXPENSE_API_PATH } from './expense-api.constants';
import { ExpenseSearchParams } from '../../services/expense/expense.typings';

@Injectable({ providedIn: 'root' })
export class ExpenseApiService {
  constructor(private httpClient: HttpClient) {}

  public getExpense(id: ExpenseDto['id']): Observable<ExpenseDto> {
    return this.httpClient
      .get<ExpenseDto>(`${API_PATH}/${EXPENSE_API_PATH}/${id}`, {
        responseType: 'json',
      })
      .pipe(map((expense) => getExpenseTruthyTypes(expense) as ExpenseDto));
  }

  public getExpenses(
    searchParams?: ExpenseSearchParams
  ): Observable<ExpenseDto[]> {
    let params: HttpParams = new HttpParams();
    if (searchParams) {
      Object.entries(searchParams).forEach(
        ([key, value]) =>
          (params = params.append(key, value ? value.toString() : 'null'))
      );
    }

    return this.httpClient.get<ExpenseDto[]>(
      `${API_PATH}/${EXPENSE_API_PATH}`,
      {
        responseType: 'json',
        params,
      }
    );
  }

  public createExpense(expense: ExpenseDto): Observable<ExpenseDto> {
    return this.httpClient.post<ExpenseDto>(
      `${API_PATH}/${EXPENSE_API_PATH}`,
      expense
    );
  }

  public removeExpense(id: ExpenseDto['id']): Observable<ExpenseDto> {
    return this.httpClient.delete<ExpenseDto>(
      `${API_PATH}/${EXPENSE_API_PATH}/${id}`
    );
  }

  public updateExpense(
    id: ExpenseDto['id'],
    updateParams: Partial<ExpenseDto>
  ): Observable<ExpenseDto> {
    console.log('update params in api: ', updateParams);
    return this.httpClient.patch<ExpenseDto>(
      `${API_PATH}/${EXPENSE_API_PATH}/${id}`,
      updateParams
    );
  }
}
