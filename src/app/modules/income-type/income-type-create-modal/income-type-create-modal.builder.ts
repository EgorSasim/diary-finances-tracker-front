import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IncomeTypeCreateForm } from '../../../services/income-type/income-type.typings';

@Injectable()
export class IncomeTypeCreateModalBuilder {
  public createFormGroup(): FormGroup<IncomeTypeCreateForm> {
    return new FormGroup<IncomeTypeCreateForm>({
      name: new FormControl(null, [Validators.required]),
    });
  }
}
