import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksPageListComponent } from './tasks-page-list.component';

@NgModule({
  declarations: [TasksPageListComponent],
  imports: [CommonModule],
  exports: [TasksPageListComponent],
})
export class TasksPageListModule {}
