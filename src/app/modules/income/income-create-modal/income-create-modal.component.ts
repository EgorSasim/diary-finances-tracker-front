import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IncomeCreateModalBuidler } from './income-create-modal.builder';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskCreateModalComponent } from '../../task/task-create-modal/task-create-modal.component';
import { FormErrorMessageService } from '../../../services/form-error-message/form-error-message.service';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'dft-income-create-modal',
  templateUrl: './income-create-modal.component.html',
  styleUrl: './income-create-modal.component.scss',
  providers: [IncomeCreateModalBuidler],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomeCreateModalComponent {
  public readonly textAreaHeight: string = '12rem';

  public formGroup = this.incomeCreateModalBuidler.createFormGroup();

  constructor(
    private matDialogRef: MatDialogRef<TaskCreateModalComponent>,
    private incomeCreateModalBuidler: IncomeCreateModalBuidler,
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
