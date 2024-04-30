import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { COMPOUND_INTEREST_REINVESTMENT_PERIOD_TO_TRANSLATE } from './compound-interest-reinvestment-period.constants';
import { AbstractControl, FormControl } from '@angular/forms';
import { CompoundInterestReinvestmentPeriod } from './compound-interest-reinvestment-period.typings';
import { FormErrorMessageService } from '../../../../../services/form-error-message/form-error-message.service';

@Component({
  selector: 'dft-compound-interest-reinvestment-period-selector',
  templateUrl: './compound-interest-reinvestment-period-selector.component.html',
  styleUrl: './compound-interest-reinvestment-period-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompoundInterestReinvestmentPeriodSelectorComponent {
  @Input() public control: FormControl<CompoundInterestReinvestmentPeriod>;

  public readonly compoundInterestReinvestmentPeriodToTranslate =
    Object.entries(COMPOUND_INTEREST_REINVESTMENT_PERIOD_TO_TRANSLATE);

  constructor(private formErrorMessageService: FormErrorMessageService) {}

  public getErrorMessage(control: AbstractControl): string {
    return this.formErrorMessageService.getControlErrorMessage(control);
  }
}
