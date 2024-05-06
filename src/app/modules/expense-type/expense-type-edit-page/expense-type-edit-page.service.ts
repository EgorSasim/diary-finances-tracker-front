import { Injectable } from '@angular/core';
import { ExpenseType } from '../../../services/expense-type/expense-type.typings';
import { Observable } from 'rxjs';
import { ExpenseTypeService } from '../../../services/expense-type/expense-type.service';

@Injectable()
export class ExpenseTypeEditPageService {
  constructor(private expenseTypeService: ExpenseTypeService) {}

  public getExpenseType(id: ExpenseType['id']): Observable<ExpenseType> {
    return this.expenseTypeService.getExpenseType(id);
  }

  public saveChanges(
    id: ExpenseType['id'],
    updateParams: Partial<ExpenseType>
  ): Observable<ExpenseType> {
    return this.expenseTypeService.updateExpenseType(id, updateParams);
  }
}
