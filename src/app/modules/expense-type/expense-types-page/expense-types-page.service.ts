import { DestroyRef, Injectable } from '@angular/core';
import { Observable, startWith, switchMap } from 'rxjs';
import { ExpenseType } from '../../../services/expense-type/expense-type.typings';
import { ExpenseTypeService } from '../../../services/expense-type/expense-type.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationService } from '../../../services/navigation/navigation.service';

@Injectable()
export class ExpenseTypesPageService {
  constructor(
    private expenseTypeService: ExpenseTypeService,
    private destroyRef: DestroyRef,
    private navigationService: NavigationService
  ) {}

  public handleExpenseTypes(): Observable<ExpenseType[]> {
    return this.expenseTypeService.expenseTypeChange$.pipe(
      startWith(true),
      switchMap(() => this.expenseTypeService.getExpenseTypes()),
      takeUntilDestroyed(this.destroyRef)
    );
  }

  public removeExpenseType(id: ExpenseType['id']): Observable<ExpenseType> {
    return this.expenseTypeService
      .removeExpenseType(id)
      .pipe(takeUntilDestroyed(this.destroyRef));
  }

  public goToExpenseTypeEditPage(id: ExpenseType['id']): void {
    this.navigationService.goToExpenseTypeEditPage(id);
  }
}
