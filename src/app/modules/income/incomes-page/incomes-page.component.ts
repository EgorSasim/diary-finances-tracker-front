import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dft-incomes-page',
  templateUrl: './incomes-page.component.html',
  styleUrl: './incomes-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomesPageComponent {}
