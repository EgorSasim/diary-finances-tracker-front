import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksPageListComponent } from './tasks-page-list.component';
import { TaskSearchPanelModule } from '../../task-search-panel/task-search-panel.module';

@NgModule({
  declarations: [TasksPageListComponent],
  imports: [CommonModule, TaskSearchPanelModule],
  exports: [TasksPageListComponent],
})
export class TasksPageListModule {}
