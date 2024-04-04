import { NgModule } from '@angular/core';
import { TaskItemComponent } from './task-item.component';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EllipsisModule } from '../../../../directives/ellipsis/ellipsis.module';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';
import { CrossOutModule } from '../../../../directives/cross-out/cross-out.module';
import { CompletedModule } from '../../../../directives/completed/completed.module';

@NgModule({
  declarations: [TaskItemComponent],
  imports: [
    MatButtonModule,
    MatIconModule,
    DatePipe,
    EllipsisModule,
    MatMenuModule,
    TranslateModule,
    CrossOutModule,
    CompletedModule,
  ],
  exports: [TaskItemComponent],
})
export class TaskItemModule {}
