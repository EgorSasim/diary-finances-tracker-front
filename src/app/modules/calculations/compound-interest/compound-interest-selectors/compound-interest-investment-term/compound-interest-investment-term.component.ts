import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { INVESTMENT_TERM_TYPE_TO_TRANSLATION } from './compound-interest-investment-term.constants';
import { InvestmentTermType } from './compound-interest-investment-term.typings';
import { FormErrorMessageService } from '../../../../../services/form-error-message/form-error-message.service';

@Component({
  selector: 'dft-compound-interest-investment-term',
  templateUrl: './compound-interest-investment-term.component.html',
  styleUrl: './compound-interest-investment-term.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompoundInterestInvestmentTermComponent {
  @Input() public control: FormControl<InvestmentTermType>;

  public readonly investmentTermTypeToTranslation = Object.entries(
    INVESTMENT_TERM_TYPE_TO_TRANSLATION
  );

  constructor(private formErrorMessageService: FormErrorMessageService) {}

  public getErrorMessage(control: AbstractControl): string {
    return this.formErrorMessageService.getControlErrorMessage(control);
  }
}
