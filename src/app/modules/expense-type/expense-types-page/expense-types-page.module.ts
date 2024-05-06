import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseTypesPageComponent } from './expense-types-page.component';
import { ListModule } from '../../common/list/list.module';
import { MatListModule } from '@angular/material/list';
import { ExpenseTypeListModule } from '../expense-type-list/expense-type-list.module';
import { CreateTrackerEntityMenuButtonModule } from '../../common/create-tracker-entity-menu-button/create-tracker-entity-menu-button.module';

@NgModule({
  declarations: [ExpenseTypesPageComponent],
  imports: [
    CommonModule,
    ListModule,
    MatListModule,
    ExpenseTypeListModule,
    CreateTrackerEntityMenuButtonModule,
  ],
  exports: [ExpenseTypesPageComponent],
})
export class ExpenseTypesPageModule {}
