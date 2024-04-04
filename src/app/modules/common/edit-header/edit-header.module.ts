import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditHeaderComponent } from './edit-header.component';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [EditHeaderComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    TranslateModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [EditHeaderComponent],
})
export class EditHeaderModule {}
