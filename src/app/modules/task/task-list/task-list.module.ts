import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { TaskListItemModule } from './task-list-item/task-list-item.module';
import { ListModule } from '../../common/list/list.module';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [TaskListComponent],
  imports: [
    CommonModule,
    TaskListItemModule,
    ListModule,
    TaskListItemModule,
    MatListModule,
  ],
  exports: [TaskListComponent],
})
export class TaskListModule {}
