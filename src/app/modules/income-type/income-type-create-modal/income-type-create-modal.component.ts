import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IncomeTypeCreateModalBuilder } from './income-type-create-modal.builder';
import { MatDialogRef } from '@angular/material/dialog';
import { FormErrorMessageService } from '../../../services/form-error-message/form-error-message.service';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'dft-income-type-create-modal',
  templateUrl: './income-type-create-modal.component.html',
  styleUrl: './income-type-create-modal.component.scss',
  providers: [IncomeTypeCreateModalBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomeTypeCreateModalComponent {
  public formGroup = this.incomeTypeCreateModalBuilder.createFormGroup();

  constructor(
    private incomeTypeCreateModalBuilder: IncomeTypeCreateModalBuilder,
    private matDialogRef: MatDialogRef<IncomeTypeCreateModalComponent>,
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
