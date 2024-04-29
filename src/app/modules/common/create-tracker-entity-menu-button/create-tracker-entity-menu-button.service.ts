import { Injectable } from '@angular/core';
import { IncomeService } from '../../../services/income/income.service';
import { Income } from '../../../services/income/income.typings';
import { Observable } from 'rxjs';
import { Expense } from '../../../services/expense/expense.typings';
import { ExpenseService } from '../../../services/expense/expense.service';

@Injectable()
export class CreateTrackerEntityMenuButtonService {
  constructor(
    private incomeService: IncomeService,
    private expenseService: ExpenseService
  ) {}

  public createIncome(income: Income): Observable<Income> {
    return this.incomeService.createIncome(income);
  }

  public createExpense(expense: Expense): Observable<Expense> {
    return this.expenseService.createExpense(expense);
  }
}
