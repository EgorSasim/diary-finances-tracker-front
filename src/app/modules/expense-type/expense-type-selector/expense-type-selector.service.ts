import { Injectable } from '@angular/core';
import { ExpenseTypeService } from '../../../services/expense-type/expense-type.service';
import { Observable } from 'rxjs';
import { ExpenseType } from '../../../services/expense-type/expense-type.typings';

@Injectable()
export class ExpenseTypeSelectorService {
  constructor(private expenseTypeService: ExpenseTypeService) {}

  public getExpenseTypes(): Observable<ExpenseType[]> {
    return this.expenseTypeService.getExpenseTypes();
  }
}
