import { ChangeDetectionStrategy, Component, DestroyRef } from '@angular/core';
import { CreateTrackerEntityMenuButtonService } from './create-tracker-entity-menu-button.service';
import { MatDialog } from '@angular/material/dialog';
import { IncomeCreateModalComponent } from '../../income/income-create-modal/income-create-modal.component';
import { filter, switchMap } from 'rxjs';
import { Income } from '../../../services/income/income.typings';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ExpenseCreateModalComponent } from '../../expense/expense-create-modal/expense-create-modal.component';

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

  public showExpenseCreateModal(): void {
    const dialogRef = this.matDialog.open(ExpenseCreateModalComponent);
    dialogRef
      .afterClosed()
      .pipe(
        filter((income) => !!income),
        switchMap((income: Income) =>
          this.createTrackerEntityMenuButtonService.createExpense(income)
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
