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
import { MatNativeDateModule } from '@angular/material/core';
import { TextAreaModule } from '../../common/text-area/text-area.module';
import { CreateFormModule } from '../../common/create-form/create-form.module';

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
    CommonModule,
    TextAreaModule,
    CreateFormModule,
  ],
  exports: [TaskCreateModalComponent],
})
export class TaskCreateModalModule {}
