import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  inject,
} from '@angular/core';
import { SnackBarInputData, SnackBarType } from './snack-bar.typings';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'dft-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackBarComponent {
  public snackBarRef = inject(MatSnackBarRef);

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackBarInputData) {
    console.log('data: ', data);
  }
}
