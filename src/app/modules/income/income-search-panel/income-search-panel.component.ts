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
  Income,
  IncomeSearchParams,
  IncomeSearchParamsForm,
} from '../../../services/income/income.typings';
import { IncomeSearchPanelBuilder } from './income-search-panel.builder';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'dft-income-search-panel',
  templateUrl: './income-search-panel.component.html',
  styleUrl: './income-search-panel.component.scss',
  providers: [IncomeSearchPanelBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomeSearchPanelComponent {
  @Input() formGroup: FormGroup<IncomeSearchParamsForm> =
    this.incomeSearchPanelBuilder.createFormGroup();
  @Output() searchParamsChange: EventEmitter<IncomeSearchParams> =
    new EventEmitter();
  constructor(
    private incomeSearchPanelBuilder: IncomeSearchPanelBuilder,
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
          this.searchParamsChange.emit(searhcParams as IncomeSearchParams);
        }
      });
  }
}
