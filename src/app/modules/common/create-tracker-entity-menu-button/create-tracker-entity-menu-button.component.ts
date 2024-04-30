import { ChangeDetectionStrategy, Component, DestroyRef } from '@angular/core';
import { CreateTrackerEntityMenuButtonService } from './create-tracker-entity-menu-button.service';
import { MatDialog } from '@angular/material/dialog';
import { IncomeCreateModalComponent } from '../../income/income-create-modal/income-create-modal.component';
import { filter, switchMap } from 'rxjs';
import { Income } from '../../../services/income/income.typings';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ExpenseCreateModalComponent } from '../../expense/expense-create-modal/expense-create-modal.component';
import { ExpenseTypeCreateModalComponent } from '../../expense-type/expense-type-create-modal/expense-type-create-modal.component';
import { Expense } from '../../../services/expense/expense.typings';
import { ExpenseType } from '../../../services/expense-type/expense-type.typings';
import { IncomeTypeCreateModalComponent } from '../../income-type/income-type-create-modal/income-type-create-modal.component';
import { IncomeType } from '../../../services/income-type/income-type.typings';

@Component({
  selector: 'dft-create-tracker-entity-menu-button',
  templateUrl: './create-tracker-entity-menu-button.component.html',
  styleUrl: './create-tracker-entity-menu-button.component.scss',
  providers: [CreateTrackerEntityMenuButtonService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTrackerEntityMenuButtonComponent {
  constructor(
    private matDialog: MatDialog,
    private createTrackerEntityMenuButtonService: CreateTrackerEntityMenuButtonService,
    private destroyRef: DestroyRef
  ) {}

  public showIncomeCreateModal(): void {
    const dialogRef = this.matDialog.open(IncomeCreateModalComponent);
    dialogRef
      .afterClosed()
      .pipe(
        filter((income) => !!income),
        switchMap((income: Income) =>
          this.createTrackerEntityMenuButtonService.createIncome(income)
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  public showIncomeTypeCreateModal(): void {
    const dialogRef = this.matDialog.open(IncomeTypeCreateModalComponent);
    dialogRef
      .afterClosed()
      .pipe(
        filter((incomeType) => !!incomeType),
        switchMap((incomeType: IncomeType) =>
          this.createTrackerEntityMenuButtonService.createIncomeType(incomeType)
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  public showExpenseCreateModal(): void {
    const dialogRef = this.matDialog.open(ExpenseCreateModalComponent);
    dialogRef
      .afterClosed()
      .pipe(
        filter((expense) => !!expense),
        switchMap((expense: Expense) =>
          this.createTrackerEntityMenuButtonService.createExpense(expense)
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  public showExpenseTypeCreateModal(): void {
    const dialogRef = this.matDialog.open(ExpenseTypeCreateModalComponent);
    dialogRef
      .afterClosed()
      .pipe(
        filter((expenseType) => !!expenseType),
        switchMap((expenseType: ExpenseType) =>
          this.createTrackerEntityMenuButtonService.createExpenseType(
            expenseType
          )
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
