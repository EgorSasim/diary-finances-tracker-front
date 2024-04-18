import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskSearchPanelComponent } from './task-search-panel.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TaskStatusSelectorModule } from '../task-status-selector/task-status-selector.module';
import { TaskPrioritySelectorModule } from '../task-priority-selector/task-priority-selector.module';
import { TaskDateRangeSelectorModule } from '../task-date-range-selector/task-date-range-selector.module';
import { MatButtonModule } from '@angular/material/button';

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
    TaskPrioritySelectorModule,
    TaskDateRangeSelectorModule,
    MatButtonModule,
  ],
  exports: [TaskSearchPanelComponent],
})
export class TaskSearchPanelModule {}
