import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskEditPageComponent } from './task-edit-page.component';
import { SpinnerModule } from '../../common/spinner/spinner.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextAreaModule } from '../../common/text-area/text-area.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EditPageModule } from '../../common/edit-page/edit-page.module';
import { TaskStatusSelectorModule } from '../task-status-selector/task-status-selector.module';

@NgModule({
  declarations: [TaskEditPageComponent],
  imports: [
    CommonModule,
    SpinnerModule,
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
    MatSlideToggleModule,
    EditPageModule,
    TaskStatusSelectorModule,
  ],
})
export class TaskEditPageModule {}
