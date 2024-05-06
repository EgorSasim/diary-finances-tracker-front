import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ExpenseTypeListItem } from './expense-type-list-item/expense-type-list-item.typings';
import { ListColumnNames } from '../../common/list/list.typings';
import { ExpenseType } from '../../../services/expense-type/expense-type.typings';

@Component({
  selector: 'dft-expense-type-list',
  templateUrl: './expense-type-list.component.html',
  styleUrl: './expense-type-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseTypeListComponent {
  @Input() public expenseTypeItems: ExpenseTypeListItem[];
  @Output() public removeExpenseType: EventEmitter<number> = new EventEmitter();
  @Output() public editExpenseType: EventEmitter<number> = new EventEmitter();

  public readonly columnNames: ListColumnNames = ['app.title', 'app.settings'];
  public removeExpenseTypeEmit(id: ExpenseType['id']): void {
    this.removeExpenseType.emit(id);
  }

  public editExpenseTypeEmit(id: ExpenseType['id']): void {
    this.editExpenseType.emit(id);
  }
}
