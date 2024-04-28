import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IncomeCreateForm } from '../../../services/income/income.typings';

@Injectable()
export class IncomeCreateModalBuidler {
  public createFormGroup(): FormGroup<IncomeCreateForm> {
    return new FormGroup<IncomeCreateForm>({
      amount: new FormControl(null, [Validators.required]),
      comment: new FormControl(null),
      date: new FormControl(null, [Validators.required]),
      type: new FormControl(null),
    });
  }
}
