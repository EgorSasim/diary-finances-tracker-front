import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ExpenseType } from '../../../services/expense-type/expense-type.typings';
import { Observable, of } from 'rxjs';
import { ExpenseTypeSelectorService } from './expense-type-selector.service';
import { EXPENSE_DEFAULT_TYPE_NAMES_TO_TRANSLATION } from '../../../api/expense-type/expense-type-api.constants';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dft-expense-type-selector',
  templateUrl: './expense-type-selector.component.html',
  styleUrl: './expense-type-selector.component.scss',
  providers: [ExpenseTypeSelectorService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseTypeSelectorComponent {
  @Input() public control: FormControl<ExpenseType>;

  public readonly typeNamesToTranslations: typeof EXPENSE_DEFAULT_TYPE_NAMES_TO_TRANSLATION =
    EXPENSE_DEFAULT_TYPE_NAMES_TO_TRANSLATION;
  public readonly types$: Observable<ExpenseType[]> =
    this.expenseTypeSelectorService.getExpenseTypes();

  constructor(
    private translateService: TranslateService,
    private expenseTypeSelectorService: ExpenseTypeSelectorService
  ) {}

  public getTranslatedTypeName(
    name: keyof typeof EXPENSE_DEFAULT_TYPE_NAMES_TO_TRANSLATION
  ): Observable<string> {
    if (this.typeNamesToTranslations?.[name]) {
      return this.translateService.get(this.typeNamesToTranslations[name]);
    }
    return of(name);
  }
}
