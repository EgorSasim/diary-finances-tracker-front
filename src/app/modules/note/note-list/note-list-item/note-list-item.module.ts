import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteListItemComponent } from './note-list-item.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { EllipsisModule } from '../../../../directives/ellipsis/ellipsis.module';

@NgModule({
  declarations: [NoteListItemComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    TranslateModule,
    MatButtonModule,
    EllipsisModule,
  ],
  exports: [NoteListItemComponent],
})
export class NoteListItemModule {}
