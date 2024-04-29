import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExpenseCreateForm } from '../../../services/expense/expense.typings';

@Injectable()
export class ExpenseCreateModalBuidler {
  public createFormGroup(): FormGroup<ExpenseCreateForm> {
    return new FormGroup<ExpenseCreateForm>({
      amount: new FormControl(null, [Validators.required]),
      comment: new FormControl(null),
      date: new FormControl(null, [Validators.required]),
      type: new FormControl(null),
    });
  }
}
