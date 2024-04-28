import { Injectable } from '@angular/core';
import { IncomeTypeApiService } from '../../api/income-type/income-type-api.service';
import { IncomeType, IncomeTypeSearchParams } from './income-type.typings';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IncomeTypeService {
  constructor(private incomeTypeApiService: IncomeTypeApiService) {}

  public getIncomeType(id: IncomeType['id']): Observable<IncomeType> {
    return this.incomeTypeApiService.getIncomeType(id);
  }

  public getIncomeTypes(
    searchParams?: IncomeTypeSearchParams
  ): Observable<IncomeType[]> {
    return this.incomeTypeApiService.getIncomeTypes(searchParams);
  }

  public createIncomeType(incomeType: IncomeType): Observable<IncomeType> {
    return this.incomeTypeApiService.createIncomeType(incomeType);
  }

  public removeIncomeType(id: IncomeType['id']): Observable<IncomeType> {
    return this.incomeTypeApiService.removeIncomeType(id);
  }

  public updateIncomeType(
    id: IncomeType['id'],
    updateParams: Partial<IncomeType>
  ): Observable<IncomeType> {
    return this.incomeTypeApiService.updateIncomeType(id, updateParams);
  }
}
