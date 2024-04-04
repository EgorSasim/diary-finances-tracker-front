import { NgModule } from '@angular/core';
import { TaskCreateModalModule } from './modules/task/task-create-modal/task-create-modal.module';
import { NoteCreateModalModule } from './modules/note/note-create-modal/note-create-modal.module';

@NgModule({
  imports: [TaskCreateModalModule, NoteCreateModalModule],
  exports: [TaskCreateModalModule, NoteCreateModalModule],
})
export class ModalsModule {}
