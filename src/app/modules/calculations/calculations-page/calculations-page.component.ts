import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dft-calculations-page',
  templateUrl: './calculations-page.component.html',
  styleUrl: './calculations-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculationsPageComponent {}
