import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CopmoundInterestFinalAmountBuilder } from './compound-interest-final-amount.builder';
import { AbstractControl } from '@angular/forms';
import { FormErrorMessageService } from '../../../../services/form-error-message/form-error-message.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../../common/snack-bar/snack-bar.component';
import { TranslateService } from '@ngx-translate/core';

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
    private formErrorMessageService: FormErrorMessageService,
    private matSnackBar: MatSnackBar,
    private translateService: TranslateService
  ) {
    this.formGroup.valueChanges.subscribe(console.log);
  }

  public getErrorMessage(control: AbstractControl): string {
    return this.formErrorMessageService.getControlErrorMessage(control);
  }

  public calculate(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      this.showRequiredFieldsSnack();
      return;
    }
    return;
  }

  private showRequiredFieldsSnack(): void {
    const horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    const verticalPosition: MatSnackBarVerticalPosition = 'bottom';

    this.matSnackBar.openFromComponent<SnackBarComponent>(SnackBarComponent, {
      data: {
        type: 'Error',
        snackText: this.translateService.instant('app.fillAllRequiredFields'),
        centerText: true,
      },
      horizontalPosition,
      verticalPosition,
      duration: 3000,
    });
  }
}
