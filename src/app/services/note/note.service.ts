import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { Note, NoteSearchParams, NoteWithSpaces } from './note.typings';
import { NoteApiService } from '../../api/note/note-api.service';
import { Task } from '../task/task.typings';

@Injectable({ providedIn: 'root' })
export class NoteService {
  public noteChange$: ReplaySubject<void> = new ReplaySubject(1);

  constructor(private noteApiService: NoteApiService) {}

  public getNotes(searchParams?: NoteSearchParams): Observable<Note[]> {
    return this.noteApiService.getNotes(searchParams);
  }

  public getNote(id: Note['id']): Observable<NoteWithSpaces> {
    return this.noteApiService.getNote(id);
  }

  public createNote(note: Note): Observable<Note> {
    note.creationDate = new Date();
    return this.noteApiService
      .createNote(note)
      .pipe(tap(() => this.noteChange$.next()));
  }

  public removeNote(id: Note['id']): Observable<Note> {
    return this.noteApiService
      .removeNote(id)
      .pipe(tap(() => this.noteChange$.next()));
  }

  public updateNote(
    id: Note['id'],
    updateParams: Partial<Task>
  ): Observable<Note> {
    return this.noteApiService
      .updateNote(id, updateParams)
      .pipe(tap(() => this.noteChange$.next()));
  }
}
