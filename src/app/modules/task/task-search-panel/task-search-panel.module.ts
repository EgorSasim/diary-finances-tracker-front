import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskSearchPanelComponent } from './task-search-panel.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TaskStatusSelectorModule } from '../task-status-selector/task-status-selector.module';

@NgModule({
  declarations: [TaskSearchPanelComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    TranslateModule,
    TaskStatusSelectorModule,
  ],
  exports: [TaskSearchPanelComponent],
})
export class TaskSearchPanelModule {}
