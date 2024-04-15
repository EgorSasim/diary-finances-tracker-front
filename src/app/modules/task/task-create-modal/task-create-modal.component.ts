import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskCreateForm } from '../../../services/task/task.typings';
import { TaskCreateModalBuilder } from './task-create-modal.builder';
import { FormErrorMessageService } from '../../../services/form-error-message/form-error-message.service';
import { TASK_PRIORITY_TO_NAME } from '../../../services/task/task.constants';

@Component({
  selector: 'dft-task-create-modal',
  templateUrl: './task-create-modal.component.html',
  styleUrl: './task-create-modal.component.scss',
  providers: [TaskCreateModalBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCreateModalComponent {
  public readonly priorities = Object.keys(TASK_PRIORITY_TO_NAME);
  public readonly priorityNames = Object.values(TASK_PRIORITY_TO_NAME);
  public readonly textAreaHeight: string = '12rem';

  public formGroup: FormGroup<TaskCreateForm> =
    this.taskCreateModalBuilder.createFormGroup();

  constructor(
    private matDialogRef: MatDialogRef<TaskCreateModalComponent>,
    private taskCreateModalBuilder: TaskCreateModalBuilder,
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
