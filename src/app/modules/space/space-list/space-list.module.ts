import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceListComponent } from './space-list.component';
import { SpaceListItemModule } from './space-list-item/space-list-item.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SpaceListComponent],
  imports: [
    CommonModule,
    SpaceListItemModule,
    MatExpansionModule,
    MatButtonModule,
    TranslateModule,
  ],
  exports: [SpaceListComponent],
})
export class SpaceListModule {}
