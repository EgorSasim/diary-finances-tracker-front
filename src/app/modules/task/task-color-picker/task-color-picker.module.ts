import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskColorPickerComponent } from './task-color-picker.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [TaskColorPickerComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [TaskColorPickerComponent],
})
export class TaskColorPickerModule {}
