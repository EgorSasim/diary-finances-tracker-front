import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExpenseTypeCreateForm } from '../../../services/expense-type/expense-type.typings';

@Injectable()
export class ExpenseTypeCreateModalBuilder {
  public createFormGroup(): FormGroup<ExpenseTypeCreateForm> {
    return new FormGroup<ExpenseTypeCreateForm>({
      name: new FormControl(null, [Validators.required]),
    });
  }
}
