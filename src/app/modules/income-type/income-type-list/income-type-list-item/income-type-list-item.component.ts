import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IncomeTypeListItem } from './income-type-list-item.typings';
import { INCOME_DEFAULT_TYPE_NAMES_TO_TRANSLATION } from '../../../../api/income-type/income-type-api.constants';
import { Observable, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dft-income-type-list-item',
  templateUrl: './income-type-list-item.component.html',
  styleUrl: './income-type-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomeTypeListItemComponent {
  @Input() public item: IncomeTypeListItem;
  @Output() public editIncomeType: EventEmitter<IncomeTypeListItem['id']> =
    new EventEmitter();
  @Output() public removeIncomeType: EventEmitter<IncomeTypeListItem['id']> =
    new EventEmitter();

  public incomeDefaultTypeNamesToTranslation: typeof INCOME_DEFAULT_TYPE_NAMES_TO_TRANSLATION =
    INCOME_DEFAULT_TYPE_NAMES_TO_TRANSLATION;

  constructor(private translateService: TranslateService) {}

  public editIncomeTypeEmit(id: IncomeTypeListItem['id']): void {
    this.editIncomeType.emit(id);
  }

  public removeIncomeTypeEmit(id: IncomeTypeListItem['id']): void {
    this.removeIncomeType.emit(id);
  }

  public getTranslatedTypeName(
    name: keyof typeof INCOME_DEFAULT_TYPE_NAMES_TO_TRANSLATION | string
  ): Observable<string> {
    const truthyTypeName =
      name as keyof typeof INCOME_DEFAULT_TYPE_NAMES_TO_TRANSLATION;
    if (this.incomeDefaultTypeNamesToTranslation?.[truthyTypeName]) {
      return this.translateService.get(
        this.incomeDefaultTypeNamesToTranslation[truthyTypeName]
      );
    }
    return of(name);
  }
}
