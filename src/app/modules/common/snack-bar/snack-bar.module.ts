import { NgModule } from '@angular/core';
import {
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
} from '@angular/material/snack-bar';
import { SnackBarComponent } from './snack-bar.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SnackBarComponent],
  imports: [
    MatSnackBarLabel,
    MatSnackBarActions,
    MatSnackBarAction,
    CommonModule,
    MatButtonModule,
  ],
  exports: [SnackBarComponent],
})
export class SnackBarModule {}
