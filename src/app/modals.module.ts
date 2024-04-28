import { NgModule } from '@angular/core';
import { TaskCreateModalModule } from './modules/task/task-create-modal/task-create-modal.module';
import { NoteCreateModalModule } from './modules/note/note-create-modal/note-create-modal.module';
import { SpaceCreateModalModule } from './modules/space/space-create-modal/space-create-modal.module';
import { IncomeCreateModalModule } from './modules/income/income-create-modal/income-create-modal.module';

@NgModule({
  imports: [
    TaskCreateModalModule,
    NoteCreateModalModule,
    SpaceCreateModalModule,
    IncomeCreateModalModule,
  ],
  exports: [
    TaskCreateModalModule,
    NoteCreateModalModule,
    SpaceCreateModalModule,
    IncomeCreateModalModule,
  ],
})
export class ModalsModule {}
