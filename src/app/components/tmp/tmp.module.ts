import { NgModule } from '@angular/core';
import { TmpComponent } from './tmp.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [TmpComponent],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule],
  exports: [TmpComponent],
})
export class TmpModule {}
