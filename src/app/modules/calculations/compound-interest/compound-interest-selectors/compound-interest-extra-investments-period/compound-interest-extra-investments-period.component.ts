import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { CompoundInterestExtraInvestmentPeriod } from './compound-interest-extra-investments-period.typings';
import { COMPOUND_INTEREST_EXTRA_INVESTMENT_PERIOD_TO_TRANSLATE } from './compound-interest-extra-investments-period.constants';
import { FormErrorMessageService } from '../../../../../services/form-error-message/form-error-message.service';

@Component({
  selector: 'dft-compound-interest-extra-investments-period',
  templateUrl: './compound-interest-extra-investments-period.component.html',
  styleUrl: './compound-interest-extra-investments-period.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompoundInterestExtraInvestmentsPeriodComponent {
  @Input() public control: FormControl<CompoundInterestExtraInvestmentPeriod>;

  public readonly compoundInterestExtraInvestmentsPeriodToTranslate =
    Object.entries(COMPOUND_INTEREST_EXTRA_INVESTMENT_PERIOD_TO_TRANSLATE);

  constructor(private formErrorMessageService: FormErrorMessageService) {}

  public getErrorMessage(control: AbstractControl): string {
    return this.formErrorMessageService.getControlErrorMessage(control);
  }
}
