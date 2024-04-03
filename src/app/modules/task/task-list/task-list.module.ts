import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { TaskItemModule } from './task-item/task-item.module';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [TaskListComponent],
  imports: [
    CommonModule,
    TaskItemModule,
    MatListModule,
    MatTableModule,
    TranslateModule,
  ],
  exports: [TaskListComponent],
})
export class TaskListModule {}
