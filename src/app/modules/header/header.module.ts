import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    MatToolbarModule,
    RouterOutlet,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    CommonModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
