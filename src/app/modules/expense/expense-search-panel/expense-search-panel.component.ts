import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  Expense,
  ExpenseSearchParams,
  ExpenseSearchParamsForm,
} from '../../../services/expense/expense.typings';
import { ExpenseSearchPanelBuilder } from './expense-search-panel.builder';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'dft-expense-search-panel',
  templateUrl: './expense-search-panel.component.html',
  styleUrl: './expense-search-panel.component.scss',
  providers: [ExpenseSearchPanelBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseSearchPanelComponent {
  @Input() formGroup: FormGroup<ExpenseSearchParamsForm> =
    this.expenseSearchPanelBuilder.createFormGroup();
  @Output() searchParamsChange: EventEmitter<ExpenseSearchParams> =
    new EventEmitter();
  constructor(
    private expenseSearchPanelBuilder: ExpenseSearchPanelBuilder,
    private destroyRef: DestroyRef
  ) {
    this.handleFormGroupChange();
  }

  public clearFormGroup(): void {
    this.formGroup.patchValue({
      amount: null,
      date: null,
      type: null,
    });
    this.formGroup.markAsPristine();
  }

  private handleFormGroupChange(): void {
    this.formGroup.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((searhcParams) => {
        if (this.formGroup.status === 'VALID') {
          this.searchParamsChange.emit(searhcParams as ExpenseSearchParams);
        }
      });
  }
}
