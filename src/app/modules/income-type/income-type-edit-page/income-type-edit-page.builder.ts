import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConvertToForm } from '../../../typings/forms';
import { IncomeType } from '../../../services/income-type/income-type.typings';

@Injectable()
export class IncomeTypeEditPageBuilder {
  public createFormGroup(
    incomeType: IncomeType
  ): FormGroup<ConvertToForm<IncomeType>> {
    return new FormGroup<ConvertToForm<IncomeType>>({
      id: new FormControl(incomeType.id),
      name: new FormControl(incomeType.name, [Validators.required]),
    });
  }
}
