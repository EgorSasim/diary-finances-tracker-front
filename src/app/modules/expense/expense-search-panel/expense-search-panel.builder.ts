import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ExpenseSearchParamsForm } from '../../../services/expense/expense.typings';

@Injectable()
export class ExpenseSearchPanelBuilder {
  public createFormGroup(): FormGroup<ExpenseSearchParamsForm> {
    return new FormGroup<ExpenseSearchParamsForm>({
      date: new FormControl(null),
      amount: new FormControl(null),
      type: new FormControl(null),
    });
  }
}
