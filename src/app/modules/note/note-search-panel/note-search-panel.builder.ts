import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NoteSearchParams } from '../../../services/note/note.typings';
import { ConvertToForm } from '../../../typings/forms';

@Injectable()
export class NoteSearchPanelBuilder {
  public createFormGroup(): FormGroup<ConvertToForm<NoteSearchParams>> {
    return new FormGroup<ConvertToForm<NoteSearchParams>>({
      creationDate: new FormControl(null),
      title: new FormControl(null),
    });
  }
}
