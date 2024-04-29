import { Injectable } from '@angular/core';
import { ExpenseService } from '../../../services/expense/expense.service';
import { Expense } from '../../../services/expense/expense.typings';
import { Observable } from 'rxjs';

@Injectable()
export class ExpenseEditPageService {
  constructor(private expenseService: ExpenseService) {}

  public getExpense(id: Expense['id']): Observable<Expense> {
    return this.expenseService.getExpense(id);
  }

  public edtiExpense(expense: Expense): Observable<Expense> {
    return this.expenseService.updateExpense(expense.id, expense);
  }
}
