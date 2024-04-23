import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, merge, switchMap } from 'rxjs';
import { Note, NoteSearchParams } from '../../../../services/note/note.typings';
import { NoteService } from '../../../../services/note/note.service';

@Injectable()
export class NotesPageListService {
  private searchParams$: BehaviorSubject<NoteSearchParams> =
    new BehaviorSubject({});
  private prevSearchParamsValue: NoteSearchParams = {};
  constructor(private noteService: NoteService) {}

  public handleNotes(): Observable<Note[]> {
    return merge(this.searchParams$, this.noteService.noteChange$).pipe(
      switchMap((searchParams) => {
        if (searchParams) {
          this.prevSearchParamsValue = searchParams;
        }
        return this.noteService.getNotes(
          searchParams || this.prevSearchParamsValue
        );
      })
    );
  }

  public searchParamsChange(searchParams: NoteSearchParams): void {
    this.searchParams$.next(searchParams);
  }

  public removeNote(id: Note['id']): Observable<Note> {
    return this.noteService.removeNote(id);
  }
}
