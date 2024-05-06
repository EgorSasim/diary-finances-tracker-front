import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeTypesPageComponent } from './income-types-page.component';
import { ListModule } from '../../common/list/list.module';
import { MatListModule } from '@angular/material/list';
import { IncomeTypeListModule } from '../income-type-list/income-type-list.module';
import { CreateTrackerEntityMenuButtonModule } from '../../common/create-tracker-entity-menu-button/create-tracker-entity-menu-button.module';

@NgModule({
  declarations: [IncomeTypesPageComponent],
  imports: [
    CommonModule,
    ListModule,
    MatListModule,
    IncomeTypeListModule,
    CreateTrackerEntityMenuButtonModule,
  ],
  exports: [IncomeTypesPageComponent],
})
export class IncomeTypesPageModule {}
