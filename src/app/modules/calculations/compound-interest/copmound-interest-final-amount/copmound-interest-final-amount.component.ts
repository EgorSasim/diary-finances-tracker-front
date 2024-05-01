import { ChangeDetectionStrategy, Component, DestroyRef } from '@angular/core';
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
import { CompoundInterestFinalAmountService } from './copmound-interest-final-amount.service';
import {
  CompoundInterestFinalAmount,
  FinalAmounCalculationsResult,
} from './comound-interest-final-amount.typings';
import {
  Observable,
  ReplaySubject,
  forkJoin,
  startWith,
  switchMap,
} from 'rxjs';
import { CompoundInterestAnlysysChartItem } from '../compound-interest-charts/compound-interest-analysis-chart/compound-interest-analysis-chart.typings';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'dft-copmound-interest-final-amount',
  templateUrl: './copmound-interest-final-amount.component.html',
  styleUrl: './copmound-interest-final-amount.component.scss',
  providers: [
    CopmoundInterestFinalAmountBuilder,
    CompoundInterestFinalAmountService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CopmoundInterestFinalAmountComponent {
  public formGroup = this.copmoundInterestFinalAmountBuilder.createFormGroup();
  public analysisChartData$: Observable<CompoundInterestAnlysysChartItem[]>;
  public finalCalculationsResult$: ReplaySubject<FinalAmounCalculationsResult> =
    new ReplaySubject(1);
  constructor(
    private copmoundInterestFinalAmountBuilder: CopmoundInterestFinalAmountBuilder,
    private formErrorMessageService: FormErrorMessageService,
    private matSnackBar: MatSnackBar,
    private translateService: TranslateService,
    private compoundInterestFinalAmountService: CompoundInterestFinalAmountService
  ) {}

  public getErrorMessage(control: AbstractControl): string {
    return this.formErrorMessageService.getControlErrorMessage(control);
  }

  public calculate(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      this.showRequiredFieldsSnack();
      return;
    }
    const finalCalculationsResult =
      this.compoundInterestFinalAmountService.calculateFinalAmount(
        this.formGroup.value as CompoundInterestFinalAmount
      );
    this.finalCalculationsResult$.next(finalCalculationsResult);
    this.analysisChartData$ =
      this.compoundInterestFinalAmountService.getAnalysisChartData(
        finalCalculationsResult
      );

    console.log('final amount: ', finalCalculationsResult);
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
