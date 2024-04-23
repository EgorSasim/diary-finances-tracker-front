import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesPageListComponent } from './notes-page-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule } from '@ngx-translate/core';
import { NoteSearchPanelModule } from '../../note-search-panel/note-search-panel.module';
import { NoteListModule } from '../../note-list/note-list.module';

@NgModule({
  declarations: [NotesPageListComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    TranslateModule,
    NoteSearchPanelModule,
    NoteListModule,
  ],
  exports: [NotesPageListComponent],
})
export class NotesPageListModule {}
