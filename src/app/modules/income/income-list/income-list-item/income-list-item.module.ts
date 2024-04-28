import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeListItemComponent } from './income-list-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [IncomeListItemComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    TranslateModule,
  ],
  exports: [IncomeListItemComponent],
})
export class IncomeListItemModule {}
