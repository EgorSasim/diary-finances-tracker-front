import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { FormErrorMessageService } from '../../../../../services/form-error-message/form-error-message.service';
import { CompoundInterestExtraInvestments } from './compound-extra-investments-input.typings';

@Component({
  selector: 'dft-compound-extra-investments-input',
  templateUrl: './compound-extra-investments-input.component.html',
  styleUrl: './compound-extra-investments-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompoundExtraInvestmentsInputComponent {
  @Input() public control: FormControl<CompoundInterestExtraInvestments>;

  constructor(private formErrorMessageService: FormErrorMessageService) {}

  public getErrorMessage(control: AbstractControl): string {
    return this.formErrorMessageService.getControlErrorMessage(control);
  }
}
