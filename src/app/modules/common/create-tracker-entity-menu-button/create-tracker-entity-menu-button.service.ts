import { Injectable } from '@angular/core';
import { IncomeService } from '../../../services/income/income.service';
import { Income } from '../../../services/income/income.typings';
import { Observable } from 'rxjs';

@Injectable()
export class CreateTrackerEntityMenuButtonService {
  constructor(private incomeService: IncomeService) {}

  public createIncome(income: Income): Observable<Income> {
    return this.incomeService.createIncome(income);
  }
}
