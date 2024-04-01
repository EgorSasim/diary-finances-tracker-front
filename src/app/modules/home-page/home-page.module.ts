import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import { TaskListModule } from '../task/task-list/task-list.module';
import { CreateEntityMenuButtonModule } from '../common/create-entity-menu-button/create-entity-menu-button.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, TaskListModule, CreateEntityMenuButtonModule],
})
export class HomePageModule {}
