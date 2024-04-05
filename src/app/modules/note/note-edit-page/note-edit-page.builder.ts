import { Injectable } from '@angular/core';
import { Note, NoteEditForm } from '../../../services/note/note.typings';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  NOTE_DESCRIPTION_MAX_LENGTH,
  NOTE_TITLE_MAX_LENGTH,
} from '../../../services/note/note.constants';

@Injectable()
export class NoteEditPageBuilder {
  public createFormGroup(note: Note): FormGroup<NoteEditForm> {
    return new FormGroup({
      id: new FormControl(note.id),
      title: new FormControl(note.title, [
        Validators.required,
        Validators.maxLength(NOTE_TITLE_MAX_LENGTH),
      ]),
      description: new FormControl(note.description, [
        Validators.maxLength(NOTE_DESCRIPTION_MAX_LENGTH),
      ]),
    });
  }
}
