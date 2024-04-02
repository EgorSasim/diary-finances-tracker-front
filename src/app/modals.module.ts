import { NgModule } from '@angular/core';
import { TaskCreateModalModule } from './modules/task/task-create-modal/task-create-modal.module';

@NgModule({
  imports: [TaskCreateModalModule],
  exports: [TaskCreateModalModule],
})
export class ModalsModule {}
