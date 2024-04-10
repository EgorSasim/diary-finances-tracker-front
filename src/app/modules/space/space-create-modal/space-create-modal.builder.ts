import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpaceCreateForm } from '../../../services/space/space.typings';
import { SPACE_NAME_MAX_LENGTH } from '../../../services/space/space.constants';

@Injectable()
export class SpaceCreateModalBuilder {
  public createFormGroup(): FormGroup<SpaceCreateForm> {
    return new FormGroup<SpaceCreateForm>({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(SPACE_NAME_MAX_LENGTH),
      ]),
      noteIds: new FormControl(null),
      taskIds: new FormControl(null),
    });
  }
}
