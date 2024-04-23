import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesPageComponent } from './notes-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NotesPageListModule } from './notes-page-list/notes-page-list.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { CreateDiaryEntityMenuButtonModule } from '../../common/create-diary-entity-menu-button/create-diary-entity-menu-button.module';

@NgModule({
  declarations: [NotesPageComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    NotesPageListModule,
    TranslateModule,
    MatIconModule,
    CreateDiaryEntityMenuButtonModule,
  ],
  exports: [NotesPageComponent],
})
export class NotesPageModule {}
