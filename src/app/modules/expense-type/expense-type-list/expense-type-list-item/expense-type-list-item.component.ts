import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ExpenseTypeListItem } from './expense-type-list-item.typings';
import { EXPENSE_DEFAULT_TYPE_NAMES_TO_TRANSLATION } from '../../../../api/expense-type/expense-type-api.constants';
import { Observable, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dft-expense-type-list-item',
  templateUrl: './expense-type-list-item.component.html',
  styleUrl: './expense-type-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseTypeListItemComponent {
  @Input() public item: ExpenseTypeListItem;
  @Output() public editExpenseType: EventEmitter<ExpenseTypeListItem['id']> =
    new EventEmitter();
  @Output() public removeExpenseType: EventEmitter<ExpenseTypeListItem['id']> =
    new EventEmitter();

  public expenseDefaultTypeNamesToTranslation: typeof EXPENSE_DEFAULT_TYPE_NAMES_TO_TRANSLATION =
    EXPENSE_DEFAULT_TYPE_NAMES_TO_TRANSLATION;

  constructor(private translateService: TranslateService) {}

  public editExpenseTypeEmit(id: ExpenseTypeListItem['id']): void {
    this.editExpenseType.emit(id);
  }

  public removeExpenseTypeEmit(id: ExpenseTypeListItem['id']): void {
    this.removeExpenseType.emit(id);
  }

  public getTranslatedTypeName(
    name: keyof typeof EXPENSE_DEFAULT_TYPE_NAMES_TO_TRANSLATION | string
  ): Observable<string> {
    const truthyTypeName =
      name as keyof typeof EXPENSE_DEFAULT_TYPE_NAMES_TO_TRANSLATION;
    if (this.expenseDefaultTypeNamesToTranslation?.[truthyTypeName]) {
      return this.translateService.get(
        this.expenseDefaultTypeNamesToTranslation[truthyTypeName]
      );
    }
    return of(name);
  }
}
