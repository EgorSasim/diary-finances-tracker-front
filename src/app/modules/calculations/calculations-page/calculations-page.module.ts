import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationsPageComponent } from './calculations-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CompoundInterestModule } from '../compound-interest/compound-interest.module';
import { InterestModule } from '../interest/interest.module';

@NgModule({
  declarations: [CalculationsPageComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatTabsModule,
    CompoundInterestModule,
    InterestModule,
  ],
})
export class CalculationsPageModule {}
