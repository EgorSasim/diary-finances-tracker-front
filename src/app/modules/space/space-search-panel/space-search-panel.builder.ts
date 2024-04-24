import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConvertToForm } from '../../../typings/forms';
import { SpaceSearchParams } from '../../../services/space/space.typings';

@Injectable()
export class SpaceSearchPanelBuilder {
  public createFormGroup(): FormGroup<ConvertToForm<SpaceSearchParams>> {
    return new FormGroup<ConvertToForm<SpaceSearchParams>>({
      name: new FormControl(null),
      noteIds: new FormControl(null),
      taskIds: new FormControl(null),
    });
  }
}
