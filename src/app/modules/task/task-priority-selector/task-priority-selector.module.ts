import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { TaskPrioritySelectorComponent } from './task-priority-selector.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskPrioritySelectorComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
  exports: [TaskPrioritySelectorComponent],
})
export class TaskPrioritySelectorModule {}
