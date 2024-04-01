import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCreateModalComponent } from './task-create-modal.component';

@NgModule({
  declarations: [TaskCreateModalComponent],
  imports: [CommonModule],
  exports: [TaskCreateModalComponent],
})
export class TaskCreateModalModule {}
