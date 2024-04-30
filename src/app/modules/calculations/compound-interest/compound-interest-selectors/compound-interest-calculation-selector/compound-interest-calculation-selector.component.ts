import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {
  COMPOUND_INTEREST_CALCULATION_SELECTOR_ITEM_TO_TRANSLATION,
  CompoundInterestCalculationSelectorItem,
} from './compound-interest-calculation-selector.typings';
import { FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'dft-compound-interest-calculation-selector',
  templateUrl: './compound-interest-calculation-selector.component.html',
  styleUrl: './compound-interest-calculation-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompoundInterestCalculationSelectorComponent implements OnInit {
  @Output()
  public calculationChange: EventEmitter<CompoundInterestCalculationSelectorItem> =
    new EventEmitter();

  public control: FormControl<CompoundInterestCalculationSelectorItem> =
    new FormControl();

  public readonly itemsToTranslations = Object.entries(
    COMPOUND_INTEREST_CALCULATION_SELECTOR_ITEM_TO_TRANSLATION
  );

  constructor(
    private destroyRef: DestroyRef,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.handleControlValue();
    this.control.setValue(CompoundInterestCalculationSelectorItem.FinalAmount);
    this.changeDetectorRef.markForCheck();
  }

  private handleControlValue(): void {
    this.control.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((calculationType) =>
        this.calculationChange.emit(calculationType)
      );
  }
}
