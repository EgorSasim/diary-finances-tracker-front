import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from '../api.constants';
import { Observable } from 'rxjs';
import { IncomeTypeDto } from './income-type-api.typings';
import { INCOME_TYPE_API_PATH } from './income-type-api.constants';
import { IncomeTypeSearchParams } from '../../services/income-type/income-type.typings';

@Injectable({ providedIn: 'root' })
export class IncomeTypeApiService {
  constructor(private httpClient: HttpClient) {}

  public getIncomeType(id: IncomeTypeDto['id']): Observable<IncomeTypeDto> {
    return this.httpClient.get<IncomeTypeDto>(
      `${API_PATH}/${INCOME_TYPE_API_PATH}/${id}`,
      {
        responseType: 'json',
      }
    );
  }

  public getIncomeTypes(
    searchParams?: IncomeTypeSearchParams
  ): Observable<IncomeTypeDto[]> {
    let params: HttpParams = new HttpParams();
    if (searchParams) {
      Object.entries(searchParams).forEach(
        ([key, value]) => (params = params.append(key, value))
      );
    }

    return this.httpClient.get<IncomeTypeDto[]>(
      `${API_PATH}/${INCOME_TYPE_API_PATH}`,
      {
        responseType: 'json',
        params,
      }
    );
  }

  public createIncomeType(
    incomeType: IncomeTypeDto
  ): Observable<IncomeTypeDto> {
    return this.httpClient.post<IncomeTypeDto>(
      `${API_PATH}/${INCOME_TYPE_API_PATH}`,
      incomeType
    );
  }

  public removeIncomeType(id: IncomeTypeDto['id']): Observable<IncomeTypeDto> {
    return this.httpClient.delete<IncomeTypeDto>(
      `${API_PATH}/${INCOME_TYPE_API_PATH}/${id}`
    );
  }

  public updateIncomeType(
    id: IncomeTypeDto['id'],
    updateParams: Partial<IncomeTypeDto>
  ): Observable<IncomeTypeDto> {
    return this.httpClient.patch<IncomeTypeDto>(
      `${API_PATH}/${INCOME_TYPE_API_PATH}/${id}`,
      updateParams
    );
  }
}
