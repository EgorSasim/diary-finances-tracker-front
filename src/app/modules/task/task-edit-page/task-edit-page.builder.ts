import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task, TaskEditForm } from '../../../services/task/task.typings';
import {
  TASK_DESCRIPTION_MAX_LENGTH,
  TASK_TITLE_MAX_LENGTH,
} from '../../../services/task/task.constants';

@Injectable()
export class TaskEditBuilder {
  public createFormGroup(task: Task): FormGroup<TaskEditForm> {
    return new FormGroup<TaskEditForm>({
      id: new FormControl({ value: task.id, disabled: true }),
      creationDate: new FormControl({
        value: task.creationDate,
        disabled: true,
      }),
      title: new FormControl(task.title, [
        Validators.required,
        Validators.maxLength(TASK_TITLE_MAX_LENGTH),
      ]),
      description: new FormControl(task.description, [
        Validators.maxLength(TASK_DESCRIPTION_MAX_LENGTH),
      ]),
      priority: new FormControl(task.priority),
      reccurance: new FormControl(task.reccurance),
      reminder: new FormControl(task.reminder),
      startDate: new FormControl(task.startDate),
      endDate: new FormControl(task.endDate),
      completed: new FormControl(task.completed),
    });
  }
}