import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
} from '@angular/core';
import { IncomeEditPageService } from './income-edit-page.service';
import { IncomeEditPageBuilder } from './income-edit-page.builder';
import { AbstractControl, FormGroup } from '@angular/forms';
import {
  Income,
  IncomeEditForm,
} from '../../../services/income/income.typings';
import { FormErrorMessageService } from '../../../services/form-error-message/form-error-message.service';
import { BackNavigationService } from '../../../services/back-navigation/back-navigation.service';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'dft-income-edit-page',
  templateUrl: './income-edit-page.component.html',
  styleUrl: './income-edit-page.component.scss',
  providers: [IncomeEditPageService, IncomeEditPageBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomeEditPageComponent {
  public readonly textAreaHeight: string = '12rem';
  public formGroup: FormGroup<IncomeEditForm>;
  private initialFormGroupState: Income;

  constructor(
    private incomeEditPageService: IncomeEditPageService,
    private incomeEditPageBuilder: IncomeEditPageBuilder,
    private formErrorMessageService: FormErrorMessageService,
    private backNavigationService: BackNavigationService,
    private activatedRoute: ActivatedRoute,
    private destroyRef: DestroyRef,
    private changeDetectroRef: ChangeDetectorRef
  ) {
    this.handleIncomeIdChange();
  }

  public getErrorMessage(control: AbstractControl): string {
    return this.formErrorMessageService.getControlErrorMessage(control);
  }

  public navigateBack(): void {
    this.backNavigationService.back();
  }

  public resetFormValue(): void {
    this.formGroup.setValue(this.initialFormGroupState);
  }

  public saveChanges(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    const val = this.formGroup.getRawValue();
    console.log('val: ', val);
    this.incomeEditPageService
      .edtiIncome(this.formGroup.getRawValue() as Income)
      .subscribe(() => {
        this.backNavigationService.back();
      });
  }

  private handleIncomeIdChange(): void {
    this.activatedRoute.params
      .pipe(
        map((params) => params['id']),
        filter((id) => !!id),
        switchMap((id) => this.incomeEditPageService.getIncome(id)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((income) => {
        if (!income) {
          this.navigateBack();
          return;
        }
        this.formGroup = this.incomeEditPageBuilder.createFormGroup(income);
        this.initialFormGroupState = income;
        this.changeDetectroRef.markForCheck();
      });
  }
}
