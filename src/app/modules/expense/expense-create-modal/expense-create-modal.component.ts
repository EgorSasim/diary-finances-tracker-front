import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExpenseCreateModalBuidler } from './expense-create-modal.builder';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskCreateModalComponent } from '../../task/task-create-modal/task-create-modal.component';
import { FormErrorMessageService } from '../../../services/form-error-message/form-error-message.service';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'dft-expense-create-modal',
  templateUrl: './expense-create-modal.component.html',
  styleUrl: './expense-create-modal.component.scss',
  providers: [ExpenseCreateModalBuidler],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseCreateModalComponent {
  public readonly textAreaHeight: string = '12rem';

  public formGroup = this.expenseCreateModalBuidler.createFormGroup();

  constructor(
    private matDialogRef: MatDialogRef<TaskCreateModalComponent>,
    private expenseCreateModalBuidler: ExpenseCreateModalBuidler,
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
