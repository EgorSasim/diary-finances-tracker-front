import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, MatListModule, MatDividerModule, TranslateModule],
  exports: [ListComponent],
})
export class ListModule {}
