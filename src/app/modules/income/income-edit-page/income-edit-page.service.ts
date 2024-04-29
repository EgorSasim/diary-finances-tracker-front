import { Injectable } from '@angular/core';
import { IncomeService } from '../../../services/income/income.service';
import { Income } from '../../../services/income/income.typings';
import { Observable } from 'rxjs';

@Injectable()
export class IncomeEditPageService {
  constructor(private incomeService: IncomeService) {}

  public getIncome(id: Income['id']): Observable<Income> {
    return this.incomeService.getIncome(id);
  }

  public edtiIncome(income: Income): Observable<Income> {
    return this.incomeService.updateIncome(income.id, income);
  }
}
