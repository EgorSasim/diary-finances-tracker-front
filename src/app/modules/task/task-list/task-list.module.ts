import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { TaskItemModule } from './task-item/task-item.module';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [TaskListComponent],
  imports: [CommonModule, TaskItemModule, MatListModule],
  exports: [TaskListComponent],
})
export class TaskListModule {}
