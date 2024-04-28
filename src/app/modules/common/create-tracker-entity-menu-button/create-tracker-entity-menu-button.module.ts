import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTrackerEntityMenuButtonComponent } from './create-tracker-entity-menu-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CreateTrackerEntityMenuButtonComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    TranslateModule,
  ],
  exports: [CreateTrackerEntityMenuButtonComponent],
})
export class CreateTrackerEntityMenuButtonModule {}
