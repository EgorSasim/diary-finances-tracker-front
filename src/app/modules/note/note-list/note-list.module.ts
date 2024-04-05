import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteListComponent } from './note-list.component';
import { NoteListItemModule } from './note-list-item/note-list-item.module';
import { ListModule } from '../../common/list/list.module';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [NoteListComponent],
  imports: [CommonModule, NoteListItemModule, ListModule, MatListModule],
  exports: [NoteListComponent],
})
export class NoteListModule {}
