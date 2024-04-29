import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseListItemComponent } from './expense-list-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ExpenseListItemComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    TranslateModule,
  ],
  exports: [ExpenseListItemComponent],
})
export class ExpenseListItemModule {}
