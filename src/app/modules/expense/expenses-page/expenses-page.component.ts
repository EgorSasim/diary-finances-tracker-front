import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dft-expenses-page',
  templateUrl: './expenses-page.component.html',
  styleUrl: './expenses-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesPageComponent {}
