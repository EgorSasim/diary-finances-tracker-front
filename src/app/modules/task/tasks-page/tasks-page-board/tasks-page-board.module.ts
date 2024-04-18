import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksPageBoardComponent } from './tasks-page-board.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [TasksPageBoardComponent],
  imports: [CommonModule, CdkDropList, CdkDrag],
  exports: [TasksPageBoardComponent],
})
export class TasksPageBoardModule {}
