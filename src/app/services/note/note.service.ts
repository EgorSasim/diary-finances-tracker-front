import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './note.typings';
import { NoteApiService } from '../../api/note/note-api.service';
import { Task } from '../task/task.typings';

@Injectable({ providedIn: 'root' })
export class NoteService {
  constructor(private noteApiService: NoteApiService) {}

  public getNotes(): Observable<Note[]> {
    return this.noteApiService.getNotes();
  }

  public getNote(id: Note['id']): Observable<Note> {
    return this.noteApiService.getNote(id);
  }

  public createNote(note: Note): Observable<Note> {
    return this.noteApiService.createNote(note);
  }

  public remoteNote(id: Note['id']): Observable<Note> {
    return this.noteApiService.removeNote(id);
  }

  public updateNote(
    id: Note['id'],
    updateParams: Partial<Task>
  ): Observable<Note> {
    return this.noteApiService.updateNote(id, updateParams);
  }
}
