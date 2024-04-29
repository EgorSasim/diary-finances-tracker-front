import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ExpenseListItem } from './expense-list-item.typings';
import { EXPENSE_DEFAULT_TYPE_NAMES_TO_TRANSLATION } from '../../../../api/expense-type/expense-type-api.constants';
import { Observable, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dft-expense-list-item',
  templateUrl: './expense-list-item.component.html',
  styleUrl: './expense-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseListItemComponent {
  @Input() public expenseItem: ExpenseListItem;
  @Output() public edit: EventEmitter<ExpenseListItem['id']> =
    new EventEmitter();
  @Output() public remove: EventEmitter<ExpenseListItem['id']> =
    new EventEmitter();

  public readonly typeNamesToTranslations: typeof EXPENSE_DEFAULT_TYPE_NAMES_TO_TRANSLATION =
    EXPENSE_DEFAULT_TYPE_NAMES_TO_TRANSLATION;

  constructor(private translateService: TranslateService) {}

  public editExpense(id: ExpenseListItem['id']): void {
    this.edit.emit(id);
  }

  public removeExpense(id: ExpenseListItem['id']): void {
    this.remove.emit(id);
  }

  public getTranslatedTypeName(
    name: keyof typeof EXPENSE_DEFAULT_TYPE_NAMES_TO_TRANSLATION
  ): Observable<string> {
    if (this.typeNamesToTranslations?.[name]) {
      return this.translateService.get(this.typeNamesToTranslations[name]);
    }
    return of(name);
  }
}
