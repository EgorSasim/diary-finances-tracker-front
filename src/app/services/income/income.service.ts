import { Injectable } from '@angular/core';
import { Income, IncomeSearchParams } from './income.typings';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { IncomeApiService } from '../../api/income/income-api.service';

@Injectable({ providedIn: 'root' })
export class IncomeService {
  public incomesChange$: ReplaySubject<void> = new ReplaySubject(1);

  constructor(private incomeApiService: IncomeApiService) {}

  public getIncome(id: Income['id']): Observable<Income> {
    return this.incomeApiService.getIncome(id);
  }

  public getIncomes(searchParams?: IncomeSearchParams): Observable<Income[]> {
    return this.incomeApiService.getIncomes(searchParams as IncomeSearchParams);
  }

  public createIncome(income: Income): Observable<Income> {
    return this.incomeApiService
      .createIncome(income)
      .pipe(tap(() => this.incomesChange$.next()));
  }

  public removeIncome(id: Income['id']): Observable<Income> {
    return this.incomeApiService
      .removeIncome(id)
      .pipe(tap(() => this.incomesChange$.next()));
  }

  public updateIncome(
    id: Income['id'],
    updateParams: Partial<Income>
  ): Observable<Income> {
    return this.incomeApiService
      .updateIncome(id, updateParams)
      .pipe(tap(() => this.incomesChange$.next()));
  }
}
