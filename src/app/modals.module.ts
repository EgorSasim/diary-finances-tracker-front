import { NgModule } from '@angular/core';
import { TaskCreateModalModule } from './modules/task/task-create-modal/task-create-modal.module';
import { NoteCreateModalModule } from './modules/note/note-create-modal/note-create-modal.module';
import { SpaceCreateModalModule } from './modules/space/space-create-modal/space-create-modal.module';
import { IncomeCreateModalModule } from './modules/income/income-create-modal/income-create-modal.module';
import { ExpenseCreateModalModule } from './modules/expense/expense-create-modal/expense-create-modal.module';
import { ExpenseTypeCreateModalModule } from './modules/expense-type/expense-type-create-modal/expense-type-create-modal.module';
import { IncomeTypeCreateModalModule } from './modules/income-type/income-type-create-modal/income-type-create-modal.module';

@NgModule({
  imports: [
    TaskCreateModalModule,
    NoteCreateModalModule,
    SpaceCreateModalModule,
    IncomeCreateModalModule,
    ExpenseCreateModalModule,
    ExpenseTypeCreateModalModule,
    IncomeTypeCreateModalModule,
  ],
  exports: [
    TaskCreateModalModule,
    NoteCreateModalModule,
    SpaceCreateModalModule,
    IncomeCreateModalModule,
    ExpenseCreateModalModule,
    ExpenseTypeCreateModalModule,
    IncomeTypeCreateModalModule,
  ],
})
export class ModalsModule {}
