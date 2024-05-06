import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExpenseTypesPageService } from './expense-types-page.service';
import { ExpenseType } from '../../../services/expense-type/expense-type.typings';
import { Observable } from 'rxjs';

@Component({
  selector: 'dft-expense-types-page',
  templateUrl: './expense-types-page.component.html',
  styleUrl: './expense-types-page.component.scss',
  providers: [ExpenseTypesPageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseTypesPageComponent {
  public expenseTypes$: Observable<ExpenseType[]> =
    this.expenseTypesPageService.handleExpenseTypes();

  constructor(private expenseTypesPageService: ExpenseTypesPageService) {}

  public editExpenseType(id: ExpenseType['id']): void {
    this.expenseTypesPageService.goToExpenseTypeEditPage(id);
  }
  public removeExpenseType(id: ExpenseType['id']): void {
    this.expenseTypesPageService
      .removeExpenseType(id)
      .subscribe((expense) => console.log('remove expense: ', expense));
  }
}
