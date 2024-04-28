import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEntityMenuButtonComponent } from './create-entity-menu-button.component';
import { CreateDiaryEntityMenuButtonModule } from '../create-diary-entity-menu-button/create-diary-entity-menu-button.module';
import { CreateTrackerEntityMenuButtonModule } from '../create-tracker-entity-menu-button/create-tracker-entity-menu-button.module';

@NgModule({
  declarations: [CreateEntityMenuButtonComponent],
  imports: [
    CommonModule,
    CreateDiaryEntityMenuButtonModule,
    CreateTrackerEntityMenuButtonModule,
  ],
  exports: [CreateEntityMenuButtonComponent],
})
export class CreateEntityMenuButtonModule {}
