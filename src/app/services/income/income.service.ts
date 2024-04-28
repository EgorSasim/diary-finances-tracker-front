import { Injectable } from '@angular/core';
import { Income, IncomeSearchParams } from './income.typings';
import { Observable } from 'rxjs';
import { IncomeApiService } from '../../api/income/income-api.service';

@Injectable({ providedIn: 'root' })
export class IncomeService {
  constructor(private incomeApiService: IncomeApiService) {}

  public getIncome(id: Income['id']): Observable<Income> {
    return this.incomeApiService.getIncome(id);
  }

  public getIncomes(searchParams?: IncomeSearchParams): Observable<Income[]> {
    return this.incomeApiService.getIncomes(searchParams);
  }

  public createIncome(income: Income): Observable<Income> {
    return this.incomeApiService.createIncome(income);
  }

  public removeIncome(id: Income['id']): Observable<Income> {
    return this.incomeApiService.removeIncome(id);
  }

  public updateIncome(
    id: Income['id'],
    updateParams: Partial<Income>
  ): Observable<Income> {
    return this.incomeApiService.updateIncome(id, updateParams);
  }
}
