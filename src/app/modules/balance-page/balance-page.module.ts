import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalancePageComponent } from './balance-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [BalancePageComponent],
  imports: [CommonModule, TranslateModule, NgxChartsModule],
  exports: [BalancePageComponent],
})
export class BalancePageModule {}
