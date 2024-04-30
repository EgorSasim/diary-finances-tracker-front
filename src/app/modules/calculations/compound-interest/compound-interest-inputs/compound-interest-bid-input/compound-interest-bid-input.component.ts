import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormErrorMessageService } from '../../../../../services/form-error-message/form-error-message.service';
import { AbstractControl, FormControl } from '@angular/forms';
import { CompoundInterestBid } from './compound-interest-bid-input.typings';

@Component({
  selector: 'dft-compound-interest-bid-input',
  templateUrl: './compound-interest-bid-input.component.html',
  styleUrl: './compound-interest-bid-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompoundInterestBidInputComponent {
  @Input() public control: FormControl<CompoundInterestBid>;

  constructor(private formErrorMessageService: FormErrorMessageService) {}

  public getErrorMessage(control: AbstractControl): string {
    return this.formErrorMessageService.getControlErrorMessage(control);
  }
}
