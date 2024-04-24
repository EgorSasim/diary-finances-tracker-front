import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceListItemComponent } from './space-list-item.component';
import { TaskListModule } from '../../../task/task-list/task-list.module';
import { NoteListModule } from '../../../note/note-list/note-list.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SpaceListItemComponent],
  imports: [
    CommonModule,
    TaskListModule,
    NoteListModule,
    MatExpansionModule,
    TranslateModule,
  ],
  exports: [SpaceListItemComponent],
})
export class SpaceListItemModule {}
