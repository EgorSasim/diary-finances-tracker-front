import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from '../api.constants';
import { Observable } from 'rxjs';
import { ExpenseTypeSearchParams } from '../../services/expense-type/expense-type.typings';
import { ExpenseTypeDto } from './expense-type-api.typings';
import { EXPENSE_TYPE_API_PATH } from './expense-type-api.constants';

@Injectable({ providedIn: 'root' })
export class ExpenseTypeApiService {
  constructor(private httpClient: HttpClient) {}

  public getExpenseType(id: ExpenseTypeDto['id']): Observable<ExpenseTypeDto> {
    return this.httpClient.get<ExpenseTypeDto>(
      `${API_PATH}/${EXPENSE_TYPE_API_PATH}/${id}`,
      {
        responseType: 'json',
      }
    );
  }

  public getExpenseTypes(
    searchParams?: ExpenseTypeSearchParams
  ): Observable<ExpenseTypeDto[]> {
    let params: HttpParams = new HttpParams();
    if (searchParams) {
      Object.entries(searchParams).forEach(
        ([key, value]) => (params = params.append(key, value))
      );
    }

    return this.httpClient.get<ExpenseTypeDto[]>(
      `${API_PATH}/${EXPENSE_TYPE_API_PATH}`,
      {
        responseType: 'json',
        params,
      }
    );
  }

  public createExpenseType(
    expenseType: ExpenseTypeDto
  ): Observable<ExpenseTypeDto> {
    return this.httpClient.post<ExpenseTypeDto>(
      `${API_PATH}/${EXPENSE_TYPE_API_PATH}`,
      expenseType
    );
  }

  public removeExpenseType(
    id: ExpenseTypeDto['id']
  ): Observable<ExpenseTypeDto> {
    return this.httpClient.delete<ExpenseTypeDto>(
      `${API_PATH}/${EXPENSE_TYPE_API_PATH}/${id}`
    );
  }

  public updateExpenseType(
    id: ExpenseTypeDto['id'],
    updateParams: Partial<ExpenseTypeDto>
  ): Observable<ExpenseTypeDto> {
    return this.httpClient.patch<ExpenseTypeDto>(
      `${API_PATH}/${EXPENSE_TYPE_API_PATH}/${id}`,
      updateParams
    );
  }
}
