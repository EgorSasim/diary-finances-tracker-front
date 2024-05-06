import { Injectable } from '@angular/core';
import { IncomeTypeApiService } from '../../api/income-type/income-type-api.service';
import { IncomeType, IncomeTypeSearchParams } from './income-type.typings';
import { Observable, ReplaySubject, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IncomeTypeService {
  public incomeTypeChange$: ReplaySubject<void> = new ReplaySubject(1);

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
    return this.incomeTypeApiService
      .createIncomeType(incomeType)
      .pipe(tap(() => this.incomeTypeChange$.next()));
  }

  public removeIncomeType(id: IncomeType['id']): Observable<IncomeType> {
    return this.incomeTypeApiService
      .removeIncomeType(id)
      .pipe(tap(() => this.incomeTypeChange$.next()));
  }

  public updateIncomeType(
    id: IncomeType['id'],
    updateParams: Partial<IncomeType>
  ): Observable<IncomeType> {
    return this.incomeTypeApiService
      .updateIncomeType(id, updateParams)
      .pipe(tap(() => this.incomeTypeChange$.next()));
  }
}
