import { NgModule } from '@angular/core';
import { TaskItemComponent } from './task-item.component';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EllipsisModule } from '../../../../directives/ellipsis/ellipsis.module';

@NgModule({
  declarations: [TaskItemComponent],
  imports: [MatButtonModule, MatIconModule, DatePipe, EllipsisModule],
  exports: [TaskItemComponent],
})
export class TaskItemModule {}
