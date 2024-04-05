import { Injectable } from '@angular/core';
import { NoteService } from '../../../services/note/note.service';
import { Note } from '../../../services/note/note.typings';
import { Observable } from 'rxjs';

@Injectable()
export class NoteEditPageService {
  constructor(private noteService: NoteService) {}

  public getNote(id: Note['id']): Observable<Note> {
    return this.noteService.getNote(id);
  }

  public saveChanges(
    id: Note['id'],
    updateParams: Partial<Note>
  ): Observable<Note> {
    return this.noteService.updateNote(id, updateParams);
  }
}
