import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  Income,
  IncomeSearchParams,
} from '../../../../services/income/income.typings';
import { Observable } from 'rxjs';
import { IncomesPageListService } from './incomes-page-list.service';
import { NavigationService } from '../../../../services/navigation/navigation.service';

@Component({
  selector: 'dft-incomes-page-list',
  templateUrl: './incomes-page-list.component.html',
  styleUrl: './incomes-page-list.component.scss',
  providers: [IncomesPageListService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomesPageListComponent {
  public incomes$: Observable<Income[]> =
    this.incomesPageListService.handleIncomes();

  constructor(
    private incomesPageListService: IncomesPageListService,
    private navigationService: NavigationService
  ) {}

  public goToIncomeEditPage(id: Income['id']): void {
    this.navigationService.goToIncomeEditPage();
  }

  public removeIncome(id: Income['id']): void {
    this.incomesPageListService.removeIncome(id).subscribe();
  }

  public handleSearchParamsChange(params: IncomeSearchParams): void {
    this.incomesPageListService.searchParamsChange(params);
  }
}
