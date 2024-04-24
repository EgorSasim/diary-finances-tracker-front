import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacesPageComponent } from './spaces-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SpacesPageListModule } from './spaces-page-list/spaces-page-list.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { CreateDiaryEntityMenuButtonModule } from '../../common/create-diary-entity-menu-button/create-diary-entity-menu-button.module';

@NgModule({
  declarations: [SpacesPageComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    SpacesPageListModule,
    TranslateModule,
    MatIconModule,
    CreateDiaryEntityMenuButtonModule,
  ],
  exports: [SpacesPageComponent],
})
export class SpacesPageModule {}
