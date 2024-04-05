import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoteListItem } from './note-list-item.typings';

@Component({
  selector: 'dft-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrl: './note-list-item.component.scss',
})
export class NoteListItemComponent {
  @Input() public noteItem: NoteListItem;
  @Output() public edit: EventEmitter<NoteListItem['id']> = new EventEmitter();
  @Output() public remove: EventEmitter<NoteListItem['id']> =
    new EventEmitter();

  public removeNote(id: NoteListItem['id']): void {
    this.remove.emit(id);
  }

  public editNote(id: NoteListItem['id']): void {
    this.edit.emit(id);
  }
}
