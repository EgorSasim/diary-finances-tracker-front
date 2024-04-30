import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExpenseTypeCreateModalBuilder } from './expense-type-create-modal.builder';
import { ExpenseType } from '../../../services/expense-type/expense-type.typings';
import { MatDialogRef } from '@angular/material/dialog';
import { FormErrorMessageService } from '../../../services/form-error-message/form-error-message.service';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'dft-expense-type-create-modal',
  templateUrl: './expense-type-create-modal.component.html',
  styleUrl: './expense-type-create-modal.component.scss',
  providers: [ExpenseTypeCreateModalBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseTypeCreateModalComponent {
  public formGroup = this.expenseTypeCreateModalBuilder.createFormGroup();

  constructor(
    private expenseTypeCreateModalBuilder: ExpenseTypeCreateModalBuilder,
    private matDialogRef: MatDialogRef<ExpenseTypeCreateModalComponent>,
    private formErrorMessageService: FormErrorMessageService
  ) {}

  public getErrorMessage(control: AbstractControl): string {
    return this.formErrorMessageService.getControlErrorMessage(control);
  }

  public create(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    this.matDialogRef.close(this.formGroup.value);
  }

  public close(): void {
    this.matDialogRef.close();
  }
}
