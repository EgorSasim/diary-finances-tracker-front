import { NgModule } from '@angular/core';
import { TaskCreateModalModule } from './modules/task/task-create-modal/task-create-modal.module';
import { NoteCreateModalModule } from './modules/note/note-create-modal/note-create-modal.module';
import { SpaceCreateModalModule } from './modules/space/space-create-modal/space-create-modal.module';

@NgModule({
  imports: [
    TaskCreateModalModule,
    NoteCreateModalModule,
    SpaceCreateModalModule,
  ],
  exports: [
    TaskCreateModalModule,
    NoteCreateModalModule,
    SpaceCreateModalModule,
  ],
})
export class ModalsModule {}
