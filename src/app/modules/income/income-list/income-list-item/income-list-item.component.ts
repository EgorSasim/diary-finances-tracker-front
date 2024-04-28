import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IncomeListItem } from './income-list-item.typings';
import { INCOME_DEFAULT_TYPE_NAMES_TO_TRANSLATION } from '../../../../api/income-type/income-type-api.constants';
import { Observable, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dft-income-list-item',
  templateUrl: './income-list-item.component.html',
  styleUrl: './income-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomeListItemComponent {
  @Input() public incomeItem: IncomeListItem;
  @Output() public edit: EventEmitter<IncomeListItem['id']> =
    new EventEmitter();
  @Output() public remove: EventEmitter<IncomeListItem['id']> =
    new EventEmitter();

  public readonly typeNamesToTranslations: typeof INCOME_DEFAULT_TYPE_NAMES_TO_TRANSLATION =
    INCOME_DEFAULT_TYPE_NAMES_TO_TRANSLATION;

  constructor(private translateService: TranslateService) {}

  public editIncome(id: IncomeListItem['id']): void {
    this.edit.emit(id);
  }

  public removeIncome(id: IncomeListItem['id']): void {
    this.remove.emit(id);
  }

  public getTranslatedTypeName(
    name: keyof typeof INCOME_DEFAULT_TYPE_NAMES_TO_TRANSLATION
  ): Observable<string> {
    if (this.typeNamesToTranslations?.[name]) {
      return this.translateService.get(this.typeNamesToTranslations[name]);
    }
    return of(name);
  }
}
