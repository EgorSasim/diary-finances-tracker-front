import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCreateModalComponent } from './task-create-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TaskCreateModalComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    TranslateModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [TaskCreateModalComponent],
})
export class TaskCreateModalModule {}
