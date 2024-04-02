import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCreateModalComponent } from './task-create-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';

@NgModule({
  declarations: [TaskCreateModalComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    TranslateModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  exports: [TaskCreateModalComponent],
})
export class TaskCreateModalModule {}
