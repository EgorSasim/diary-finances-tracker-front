import { Injectable } from '@angular/core';
import {
  Expense,
  ExpenseEditForm,
} from '../../../services/expense/expense.typings';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class ExpenseEditPageBuilder {
  public createFormGroup(expense: Expense): FormGroup<ExpenseEditForm> {
    return new FormGroup<ExpenseEditForm>({
      id: new FormControl(expense.id),
      amount: new FormControl(expense.amount),
      comment: new FormControl(expense.comment),
      date: new FormControl(expense.date),
      type: new FormControl(expense.type),
    });
  }
}
