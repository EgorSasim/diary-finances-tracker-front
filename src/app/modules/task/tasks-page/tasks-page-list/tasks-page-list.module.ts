import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksPageListComponent } from './tasks-page-list.component';
import { TaskSearchPanelModule } from '../../task-search-panel/task-search-panel.module';
import { TaskListModule } from '../../task-list/task-list.module';
import { SpinnerModule } from '../../../common/spinner/spinner.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [TasksPageListComponent],
  imports: [
    CommonModule,
    TaskSearchPanelModule,
    TaskListModule,
    SpinnerModule,
    TranslateModule,
  ],
  exports: [TasksPageListComponent],
})
export class TasksPageListModule {}
