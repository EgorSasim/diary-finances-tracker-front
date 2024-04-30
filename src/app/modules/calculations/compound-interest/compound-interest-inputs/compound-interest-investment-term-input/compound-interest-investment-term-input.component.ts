import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { CompoundInterestInvestmentTerm } from './compound-interest-investment-term-input.typings';
import { FormErrorMessageService } from '../../../../../services/form-error-message/form-error-message.service';

@Component({
  selector: 'dft-compound-interest-investment-term-input',
  templateUrl: './compound-interest-investment-term-input.component.html',
  styleUrl: './compound-interest-investment-term-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompoundInterestInvestmentTermInputComponent {
  @Input() public control: FormControl<CompoundInterestInvestmentTerm>;

  constructor(private formErrorMessageService: FormErrorMessageService) {}

  public getErrorMessage(control: AbstractControl): string {
    return this.formErrorMessageService.getControlErrorMessage(control);
  }
}
