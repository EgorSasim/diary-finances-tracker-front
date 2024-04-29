import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IncomeDto } from './income-api.typings';
import { Observable, map } from 'rxjs';
import { INCOME_API_PATH } from './income-api.constants';
import { API_PATH } from '../api.constants';
import { IncomeSearchParams } from '../../services/income/income.typings';
import { getIncomeTruthyTypes } from './income-api.helpers';

@Injectable({ providedIn: 'root' })
export class IncomeApiService {
  constructor(private httpClient: HttpClient) {}

  public getIncome(id: IncomeDto['id']): Observable<IncomeDto> {
    return this.httpClient
      .get<IncomeDto>(`${API_PATH}/${INCOME_API_PATH}/${id}`, {
        responseType: 'json',
      })
      .pipe(map((income) => getIncomeTruthyTypes(income) as IncomeDto));
  }

  public getIncomes(
    searchParams?: IncomeSearchParams
  ): Observable<IncomeDto[]> {
    let params: HttpParams = new HttpParams();
    if (searchParams) {
      Object.entries(searchParams).forEach(
        ([key, value]) =>
          (params = params.append(key, value ? value.toString() : 'null'))
      );
    }

    return this.httpClient.get<IncomeDto[]>(`${API_PATH}/${INCOME_API_PATH}`, {
      responseType: 'json',
      params,
    });
  }

  public createIncome(income: IncomeDto): Observable<IncomeDto> {
    return this.httpClient.post<IncomeDto>(
      `${API_PATH}/${INCOME_API_PATH}`,
      income
    );
  }

  public removeIncome(id: IncomeDto['id']): Observable<IncomeDto> {
    return this.httpClient.delete<IncomeDto>(
      `${API_PATH}/${INCOME_API_PATH}/${id}`
    );
  }

  public updateIncome(
    id: IncomeDto['id'],
    updateParams: Partial<IncomeDto>
  ): Observable<IncomeDto> {
    console.log('update params in api: ', updateParams);
    return this.httpClient.patch<IncomeDto>(
      `${API_PATH}/${INCOME_API_PATH}/${id}`,
      updateParams
    );
  }
}
