import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  Expense,
  ExpenseSearchParams,
} from '../../../../services/expense/expense.typings';
import { Observable } from 'rxjs';
import { ExpensesPageListService } from './expenses-page-list.service';
import { NavigationService } from '../../../../services/navigation/navigation.service';

@Component({
  selector: 'dft-expenses-page-list',
  templateUrl: './expenses-page-list.component.html',
  styleUrl: './expenses-page-list.component.scss',
  providers: [ExpensesPageListService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesPageListComponent {
  public expenses$: Observable<Expense[]> =
    this.expensesPageListService.handleExpenses();

  constructor(
    private expensesPageListService: ExpensesPageListService,
    private navigationService: NavigationService
  ) {}

  public goToExpenseEditPage(id: Expense['id']): void {
    this.navigationService.goToExpenseEditPage(id);
  }

  public removeExpense(id: Expense['id']): void {
    this.expensesPageListService.removeExpense(id).subscribe();
  }

  public handleSearchParamsChange(params: ExpenseSearchParams): void {
    this.expensesPageListService.searchParamsChange(params);
  }
}
