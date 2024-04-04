import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteCreateForm } from '../../../services/note/note.typings';
import {
  NOTE_DESCRIPTION_MAX_LENGTH,
  NOTE_TITLE_MAX_LENGTH,
} from '../../../services/note/note.constants';

@Injectable()
export class NoteCreateModalBuilder {
  public createFormGroup(): FormGroup<NoteCreateForm> {
    return new FormGroup<NoteCreateForm>({
      title: new FormControl(null, [
        Validators.required,
        Validators.maxLength(NOTE_TITLE_MAX_LENGTH),
      ]),
      description: new FormControl(null, [
        Validators.maxLength(NOTE_DESCRIPTION_MAX_LENGTH),
      ]),
    });
  }
}
