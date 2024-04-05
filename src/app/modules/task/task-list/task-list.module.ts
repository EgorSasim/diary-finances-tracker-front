import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { TaskItemModule } from './task-item/task-item.module';
import { ListModule } from '../../common/list/list.module';
import { MatListItem } from '@angular/material/list';

@NgModule({
  declarations: [TaskListComponent],
  imports: [CommonModule, TaskItemModule, ListModule, MatListItem],
  exports: [TaskListComponent],
})
export class TaskListModule {}
