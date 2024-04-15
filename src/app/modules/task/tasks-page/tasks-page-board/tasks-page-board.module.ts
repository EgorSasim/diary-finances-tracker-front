import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksPageBoardComponent } from './tasks-page-board.component';

@NgModule({
  declarations: [TasksPageBoardComponent],
  imports: [CommonModule],
  exports: [TasksPageBoardComponent],
})
export class TasksPageBoardModule {}
