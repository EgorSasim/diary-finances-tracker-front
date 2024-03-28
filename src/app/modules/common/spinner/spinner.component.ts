import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dft-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {}
