import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  SpaceEdit,
  SpaceEditForm,
} from '../../../services/space/space.typings';
import { SPACE_NAME_MAX_LENGTH } from '../../../services/space/space.constants';

@Injectable()
export class SpaceEditPageBuilder {
  public createFormGroup(space: SpaceEdit): FormGroup<SpaceEditForm> {
    return new FormGroup<SpaceEditForm>({
      id: new FormControl({ value: space.id, disabled: true }),
      name: new FormControl(space.name, [
        Validators.required,
        Validators.maxLength(SPACE_NAME_MAX_LENGTH),
      ]),
      noteIds: new FormControl(space.noteIds),
      taskIds: new FormControl(space.taskIds),
    });
  }
}
