import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IncomeSearchParamsForm } from '../../../services/income/income.typings';

@Injectable()
export class IncomeSearchPanelBuilder {
  public createFormGroup(): FormGroup<IncomeSearchParamsForm> {
    return new FormGroup<IncomeSearchParamsForm>({
      date: new FormControl(null),
      amount: new FormControl(null),
      type: new FormControl(null),
    });
  }
}
