import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IncomeListItem } from './income-list-item/income-list-item.typings';

@Component({
  selector: 'dft-income-list',
  templateUrl: './income-list.component.html',
  styleUrl: './income-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomeListComponent {
  @Input() public incomeItems: IncomeListItem[];
  @Output() public editIncome: EventEmitter<IncomeListItem['id']> =
    new EventEmitter();
  @Output() public removeIncome: EventEmitter<IncomeListItem['id']> =
    new EventEmitter();

  public readonly columnNames: string[] = [
    'app.income.type',
    'app.amount',
    'app.date',
    'app.settings',
  ];

  public editIncomeEmit(id: IncomeListItem['id']): void {
    this.editIncome.emit(id);
  }

  public removeIncomeEmit(id: IncomeListItem['id']): void {
    this.removeIncome.emit(id);
  }
}
