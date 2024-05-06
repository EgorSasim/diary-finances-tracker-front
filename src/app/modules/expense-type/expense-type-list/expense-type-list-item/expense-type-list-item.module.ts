import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseTypeListItemComponent } from './expense-type-list-item.component';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ExpenseTypeListItemComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    TranslateModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [ExpenseTypeListItemComponent],
})
export class ExpenseTypeListItemModule {}
