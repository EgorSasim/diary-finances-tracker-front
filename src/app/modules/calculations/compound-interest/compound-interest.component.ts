import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { CompoundInterestCalculationSelectorItem } from './compound-interest-selectors/compound-interest-calculation-selector/compound-interest-calculation-selector.typings';

@Component({
  selector: 'dft-compound-interest',
  templateUrl: './compound-interest.component.html',
  styleUrl: './compound-interest.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompoundInterestComponent {
  public currentCalculationType: CompoundInterestCalculationSelectorItem;

  public changeCalculationType(
    type: CompoundInterestCalculationSelectorItem
  ): void {
    this.currentCalculationType = type;
    this.changeDetectorRef.markForCheck();
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {}
}
