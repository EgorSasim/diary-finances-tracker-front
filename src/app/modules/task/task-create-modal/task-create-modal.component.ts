import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskCreateForm } from '../../../services/task/task.typings';
import { TaskCreateModalBuilder } from './task-create-modal.builder';
import { TASK_PRIORITY_TO_NAME } from '../../../constants/task-priorities';
import { getControlErrorMessage } from '../../../helpers/form-errors';
import { TranslateService } from '@ngx-translate/core';

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

  public formGroup: FormGroup<TaskCreateForm> =
    this.taskCreateModalBuilder.createFormGroup();

  constructor(
    private matDialogRef: MatDialogRef<TaskCreateModalComponent>,
    private taskCreateModalBuilder: TaskCreateModalBuilder,
    private translateService: TranslateService
  ) {}

  public getErrorMessage(control: AbstractControl): string {
    const errMessage = getControlErrorMessage(control);
    const errText = this.translateService.instant(
      errMessage.errorText,
      errMessage.params
    );

    return errText;
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
