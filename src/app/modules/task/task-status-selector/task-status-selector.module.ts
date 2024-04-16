import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskStatusSelectorComponent } from './task-status-selector.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [TaskStatusSelectorComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    TranslateModule,
    MatInputModule,
  ],
  exports: [TaskStatusSelectorComponent],
})
export class TaskStatusSelectorModule {}
