import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IncomeType } from '../../../services/income-type/income-type.typings';
import { Observable } from 'rxjs';
import { IncomeTypesPageService } from './income-types-page.service';

@Component({
  selector: 'dft-income-types-page',
  templateUrl: './income-types-page.component.html',
  styleUrl: './income-types-page.component.scss',
  providers: [IncomeTypesPageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomeTypesPageComponent {
  public incomeTypes$: Observable<IncomeType[]> =
    this.incomeTypesPageService.handleIncomeTypes();

  constructor(private incomeTypesPageService: IncomeTypesPageService) {}

  public editIncomeType(id: IncomeType['id']): void {
    this.incomeTypesPageService.goToIncomeTypeEditPage(id);
  }
  public removeIncomeType(id: IncomeType['id']): void {
    this.incomeTypesPageService.removeIncomeType(id).subscribe();
  }
}
