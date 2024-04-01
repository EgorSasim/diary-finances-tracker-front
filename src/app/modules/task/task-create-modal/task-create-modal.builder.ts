import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskCreateForm } from '../../../services/task/task.typings';
import {
  TASK_DESCRIPTION_MAX_LENGTH,
  TASK_TITLE_MAX_LENGTH,
} from '../../../services/task/task.constants';

@Injectable()
export class TaskCreateModalBuilder {
  public createFormGroup(): FormGroup<TaskCreateForm> {
    return new FormGroup<TaskCreateForm>({
      creationDate: new FormControl(null),
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(TASK_TITLE_MAX_LENGTH),
      ]),
      description: new FormControl('', [
        Validators.maxLength(TASK_DESCRIPTION_MAX_LENGTH),
      ]),
      priority: new FormControl(null),
      reccurance: new FormControl(null),
      reminder: new FormControl(null),
      startDate: new FormControl(null),
      endDate: new FormControl(null),
    });
  }
}
