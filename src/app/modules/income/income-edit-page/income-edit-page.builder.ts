import { Injectable } from '@angular/core';
import {
  Income,
  IncomeEditForm,
} from '../../../services/income/income.typings';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class IncomeEditPageBuilder {
  public createFormGroup(income: Income): FormGroup<IncomeEditForm> {
    return new FormGroup<IncomeEditForm>({
      id: new FormControl(income.id),
      amount: new FormControl(income.amount),
      comment: new FormControl(income.comment),
      date: new FormControl(income.date),
      type: new FormControl(income.type),
    });
  }
}
