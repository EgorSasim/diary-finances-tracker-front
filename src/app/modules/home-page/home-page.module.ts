import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import { TaskListModule } from '../task/task-list/task-list.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, TaskListModule],
})
export class HomePageModule {}
