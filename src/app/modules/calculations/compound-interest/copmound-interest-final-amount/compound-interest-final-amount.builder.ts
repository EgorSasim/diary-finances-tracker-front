import { Injectable } from '@angular/core';
import { CompoundInterestFinalAmountForm } from './comound-interest-final-amount.typings';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class CopmoundInterestFinalAmountBuilder {
  public createFormGroup(): FormGroup<CompoundInterestFinalAmountForm> {
    return new FormGroup<CompoundInterestFinalAmountForm>({
      bid: new FormControl(null, [Validators.required, Validators.min(1)]),
      extraInvestitions: new FormControl(null, [Validators.min(0)]),
      extraInvestitionsType: new FormControl('month'),
      reinvestmentPeriod: new FormControl('noReinvestment'),
      investmentTerm: new FormControl(null, [
        Validators.required,
        Validators.min(1),
        Validators.pattern('^[0-9]*$'),
      ]),
      ivestmentTermType: new FormControl('year'),
      startUpCapital: new FormControl(null, [
        Validators.required,
        Validators.min(0),
      ]),
    });
  }
}
