import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IncomeType } from '../../../services/income-type/income-type.typings';
import { Observable, of } from 'rxjs';
import { IncomeTypeSelectorService } from './income-type-selector.service';
import { INCOME_DEFAULT_TYPE_NAMES_TO_TRANSLATION } from '../../../api/income-type/income-type-api.constants';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dft-income-type-selector',
  templateUrl: './income-type-selector.component.html',
  styleUrl: './income-type-selector.component.scss',
  providers: [IncomeTypeSelectorService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomeTypeSelectorComponent {
  @Input() public control: FormControl<IncomeType>;

  public readonly typeNamesToTranslations: typeof INCOME_DEFAULT_TYPE_NAMES_TO_TRANSLATION =
    INCOME_DEFAULT_TYPE_NAMES_TO_TRANSLATION;
  public readonly types$: Observable<IncomeType[]> =
    this.incomeTypeSelectorService.getIncomeTypes();

  constructor(
    private translateService: TranslateService,
    private incomeTypeSelectorService: IncomeTypeSelectorService
  ) {}

  public getTranslatedTypeName(
    name: keyof typeof INCOME_DEFAULT_TYPE_NAMES_TO_TRANSLATION
  ): Observable<string> {
    if (this.typeNamesToTranslations?.[name]) {
      return this.translateService.get(this.typeNamesToTranslations[name]);
    }
    return of(name);
  }
}
