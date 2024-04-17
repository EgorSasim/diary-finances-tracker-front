import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConvertToForm } from '../../../typings/forms';
import { TaskSearchParams } from '../../../services/task/task.typings';

@Injectable()
export class TaskSearchPanelBuilder {
  public createFormGroup(): FormGroup<ConvertToForm<TaskSearchParams>> {
    return new FormGroup<ConvertToForm<TaskSearchParams>>({
      title: new FormControl(null),
      description: new FormControl(null),
      priority: new FormControl(null),
      creationDate: new FormControl(null),
      endDate: new FormControl(null),
      startDate: new FormControl(null),
      status: new FormControl(),
    });
  }
}
