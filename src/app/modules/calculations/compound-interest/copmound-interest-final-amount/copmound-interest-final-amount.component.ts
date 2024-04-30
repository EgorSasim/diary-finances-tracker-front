import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CopmoundInterestFinalAmountBuilder } from './compound-interest-final-amount.builder';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FormErrorMessageService } from '../../../../services/form-error-message/form-error-message.service';

@Component({
  selector: 'dft-copmound-interest-final-amount',
  templateUrl: './copmound-interest-final-amount.component.html',
  styleUrl: './copmound-interest-final-amount.component.scss',
  providers: [CopmoundInterestFinalAmountBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CopmoundInterestFinalAmountComponent {
  public formGroup = this.copmoundInterestFinalAmountBuilder.createFormGroup();
  constructor(
    private copmoundInterestFinalAmountBuilder: CopmoundInterestFinalAmountBuilder,
    private formErrorMessageService: FormErrorMessageService
  ) {
    this.formGroup.valueChanges.subscribe(console.log);
  }

  public getErrorMessage(control: AbstractControl): string {
    return this.formErrorMessageService.getControlErrorMessage(control);
  }

  public calculate(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    return;
  }
}
