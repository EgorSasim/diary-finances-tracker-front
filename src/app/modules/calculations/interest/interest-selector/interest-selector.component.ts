import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  InterestSelector,
  InterestSelectorToTranslations,
} from './interest-selector.constants';
import { FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'dft-interest-selector',
  templateUrl: './interest-selector.component.html',
  styleUrl: './interest-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterestSelectorComponent {
  @Output() public selectType: EventEmitter<InterestSelector> =
    new EventEmitter();
  public control: FormControl<InterestSelector> = new FormControl();

  public readonly interestSelectorToTranslations = Object.entries(
    InterestSelectorToTranslations
  );

  constructor(private destroyRef: DestroyRef) {}

  public ngOnInit(): void {
    this.handleControlValue();
    this.control.setValue(InterestSelector.PercentFromNumber);
  }

  private handleControlValue(): void {
    this.control.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((calculationType) => this.selectType.emit(calculationType));
  }
}
