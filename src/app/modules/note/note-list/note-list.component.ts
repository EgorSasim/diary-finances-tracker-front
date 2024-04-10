import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NoteListItem } from './note-list-item/note-list-item.typings';
import { ListColumnNames } from '../../common/list/list.typings';

@Component({
  selector: 'dft-note-list',
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteListComponent {
  @Input() public noteItems: NoteListItem[];
  @Output() public editNote: EventEmitter<NoteListItem['id']> =
    new EventEmitter();
  @Output() public removeNote: EventEmitter<NoteListItem['id']> =
    new EventEmitter();

  public readonly columnNames: ListColumnNames = [
    'app.title',
    'app.description',
    'app.settings',
  ];

  public editNoteEmit(id: NoteListItem['id']): void {
    this.editNote.emit(id);
  }

  public removeNoteEmit(id: NoteListItem['id']): void {
    this.removeNote.emit(id);
  }
}
