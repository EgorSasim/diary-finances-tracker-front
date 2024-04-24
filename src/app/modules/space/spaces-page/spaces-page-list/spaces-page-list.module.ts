import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacesPageListComponent } from './spaces-page-list.component';
import { SpaceSearchPanelModule } from '../../space-search-panel/space-search-panel.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule } from '@ngx-translate/core';
import { NoteSearchPanelModule } from '../../../note/note-search-panel/note-search-panel.module';

@NgModule({
  declarations: [SpacesPageListComponent],
  imports: [
    CommonModule,
    SpaceSearchPanelModule,
    MatExpansionModule,
    TranslateModule,
    NoteSearchPanelModule,
    // SpaceListModule,
  ],
  exports: [SpacesPageListComponent],
})
export class SpacesPageListModule {}
