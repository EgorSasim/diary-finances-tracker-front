import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeTypeListItemComponent } from './income-type-list-item.component';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [IncomeTypeListItemComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    TranslateModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [IncomeTypeListItemComponent],
})
export class IncomeTypeListItemModule {}
