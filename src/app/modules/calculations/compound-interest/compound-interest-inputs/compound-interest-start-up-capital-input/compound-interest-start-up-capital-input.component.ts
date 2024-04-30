import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CompoundInterestStartUpCapital } from './compound-interest-start-up-capital-input.typings';
import { AbstractControl, FormControl } from '@angular/forms';
import { FormErrorMessageService } from '../../../../../services/form-error-message/form-error-message.service';

@Component({
  selector: 'dft-compound-interest-start-up-capital-input',
  templateUrl: './compound-interest-start-up-capital-input.component.html',
  styleUrl: './compound-interest-start-up-capital-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompoundInterestStartUpCapitalInputComponent {
  @Input() public control: FormControl<CompoundInterestStartUpCapital>;

  constructor(private formErrorMessageService: FormErrorMessageService) {}

  public getErrorMessage(control: AbstractControl): string {
    return this.formErrorMessageService.getControlErrorMessage(control);
  }
}
