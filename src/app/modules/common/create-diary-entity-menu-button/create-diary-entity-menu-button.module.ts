import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDiaryEntityMenuButtonComponent } from './create-diary-entity-menu-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CreateDiaryEntityMenuButtonComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    TranslateModule,
  ],
  exports: [CreateDiaryEntityMenuButtonComponent],
})
export class CreateDiaryEntityMenuButtonModule {}
