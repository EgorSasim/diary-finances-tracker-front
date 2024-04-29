import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ExpenseListItem } from './expense-list-item/expense-list-item.typings';

@Component({
  selector: 'dft-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseListComponent {
  @Input() public expenseItems: ExpenseListItem[];
  @Output() public editExpense: EventEmitter<ExpenseListItem['id']> =
    new EventEmitter();
  @Output() public removeExpense: EventEmitter<ExpenseListItem['id']> =
    new EventEmitter();

  public readonly columnNames: string[] = [
    'app.expense.type',
    'app.amount',
    'app.date',
    'app.settings',
  ];

  public editExpenseEmit(id: ExpenseListItem['id']): void {
    this.editExpense.emit(id);
  }

  public removeExpenseEmit(id: ExpenseListItem['id']): void {
    this.removeExpense.emit(id);
  }
}
