import { Injectable } from '@angular/core';
import { IncomeService } from '../../../services/income/income.service';
import { Income } from '../../../services/income/income.typings';
import { Observable } from 'rxjs';
import { Expense } from '../../../services/expense/expense.typings';
import { ExpenseService } from '../../../services/expense/expense.service';
import { ExpenseTypeService } from '../../../services/expense-type/expense-type.service';
import { ExpenseType } from '../../../services/expense-type/expense-type.typings';
import { IncomeType } from '../../../services/income-type/income-type.typings';
import { IncomeTypeService } from '../../../services/income-type/income-type.service';

@Injectable()
export class CreateTrackerEntityMenuButtonService {
  constructor(
    private incomeService: IncomeService,
    private expenseService: ExpenseService,
    private expenseTypeService: ExpenseTypeService,
    private incomeTypeService: IncomeTypeService
  ) {}

  public createIncome(income: Income): Observable<Income> {
    return this.incomeService.createIncome(income);
  }

  public createIncomeType(incomeType: IncomeType): Observable<IncomeType> {
    return this.incomeTypeService.createIncomeType(incomeType);
  }

  public createExpense(expense: Expense): Observable<Expense> {
    return this.expenseService.createExpense(expense);
  }

  public createExpenseType(expenseType: ExpenseType): Observable<ExpenseType> {
    return this.expenseTypeService.createExpenseType(expenseType);
  }
}
