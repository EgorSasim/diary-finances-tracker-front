import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskEditPageComponent } from './task-edit-page.component';
import { SpinnerModule } from '../../common/spinner/spinner.module';

@NgModule({
  declarations: [TaskEditPageComponent],
  imports: [CommonModule, SpinnerModule],
})
export class TaskEditPageModule {}
