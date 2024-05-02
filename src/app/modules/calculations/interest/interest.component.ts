import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InterestSelector } from './interest-selector/interest-selector.constants';
import { InterestSelectorToCalculationsText } from './interest.component.constants';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormErrorMessageService } from '../../../services/form-error-message/form-error-message.service';

@Component({
  selector: 'dft-interest',
  templateUrl: './interest.component.html',
  styleUrl: './interest.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterestComponent {
  public formGroup = new FormGroup({
    control1: new FormControl<number | null>(null, [Validators.required]),
    control2: new FormControl<number | null>(null, [Validators.required]),
  });
  public selectedCalculationsType: InterestSelector =
    InterestSelector.PercentFromNumber;
  public inputText: string[] =
    InterestSelectorToCalculationsText[this.selectedCalculationsType];
  public calculationsResult: number = 0;

  public interestCalculationTypeChange(type: InterestSelector): void {
    this.selectedCalculationsType = type;
    this.inputText = InterestSelectorToCalculationsText[type];
  }

  constructor(private formErrorMessageService: FormErrorMessageService) {}

  public getErrorMessage(control: AbstractControl): string {
    return this.formErrorMessageService.getControlErrorMessage(control);
  }

  public calculate(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    let result: number;
    const firstControlValue = this.formGroup.controls.control1.value as number;
    const secondControlValue = this.formGroup.controls.control2.value as number;
    console.log('first value: ', firstControlValue);
    console.log('second value: ', secondControlValue);
    switch (this.selectedCalculationsType) {
      case InterestSelector.PercentFromNumber:
        result = (firstControlValue * secondControlValue) / 100;
        console.log('result: ', result);
        break;
      case InterestSelector.PercentOneNumberFromAnother:
        result = (firstControlValue / secondControlValue) * 100;
        console.log('result2: ', result);
        break;
      case InterestSelector.AddPercentToNumber:
        result = firstControlValue * (1 + secondControlValue / 100);
        break;
      case InterestSelector.SubstractPercentFromNumber:
        result = firstControlValue * (1 - secondControlValue / 100);
        break;
      case InterestSelector.PercentsOneNumberMoreAnother:
        result = (firstControlValue / secondControlValue) * 100 - 100;
        break;
      case InterestSelector.PercentsOneNumberLessAnother:
        result = 100 - (firstControlValue / secondControlValue) * 100;
        break;
      case InterestSelector.HundredPercents:
        result = (firstControlValue * 100) / secondControlValue;
        break;
    }

    this.calculationsResult = result;
  }
}
