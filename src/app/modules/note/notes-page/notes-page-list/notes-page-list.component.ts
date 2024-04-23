import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NotesPageListService } from './notes-page-list.service';
import { Note, NoteSearchParams } from '../../../../services/note/note.typings';
import { Observable } from 'rxjs';
import { NavigationService } from '../../../../services/navigation/navigation.service';

@Component({
  selector: 'dft-notes-page-list',
  templateUrl: './notes-page-list.component.html',
  styleUrl: './notes-page-list.component.scss',
  providers: [NotesPageListService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesPageListComponent {
  public notes$: Observable<Note[]> = this.notesPageListService.handleNotes();

  constructor(
    private notesPageListService: NotesPageListService,
    private navigationService: NavigationService
  ) {}

  public searchParamsChange(params: NoteSearchParams): void {
    this.notesPageListService.searchParamsChange(params);
  }

  public goToNoteEditPage(id: Note['id']): void {
    this.navigationService.goToNoteEditPage(id);
  }

  public removeNote(id: Note['id']): void {
    this.notesPageListService.removeNote(id).subscribe();
  }
}
