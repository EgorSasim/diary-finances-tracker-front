import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConvertToForm } from '../../../typings/forms';
import { ExpenseType } from '../../../services/expense-type/expense-type.typings';

@Injectable()
export class ExpenseTypeEditPageBuilder {
  public createFormGroup(
    expenseType: ExpenseType
  ): FormGroup<ConvertToForm<ExpenseType>> {
    return new FormGroup<ConvertToForm<ExpenseType>>({
      id: new FormControl(expenseType.id),
      name: new FormControl(expenseType.name, [Validators.required]),
    });
  }
}
