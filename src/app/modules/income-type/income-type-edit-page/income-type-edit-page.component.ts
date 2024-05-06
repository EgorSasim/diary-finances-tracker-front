import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnInit,
} from '@angular/core';
import { BackNavigationService } from '../../../services/back-navigation/back-navigation.service';
import { IncomeTypeEditPageBuilder } from './income-type-edit-page.builder';
import { IncomeType } from '../../../services/income-type/income-type.typings';
import { ConvertToForm } from '../../../typings/forms';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationService } from '../../../services/navigation/navigation.service';
import { FormErrorMessageService } from '../../../services/form-error-message/form-error-message.service';
import { IncomeTypeEditPageService } from './income-type-edit-page.service';

@Component({
  selector: 'dft-income-type-edit-page',
  templateUrl: './income-type-edit-page.component.html',
  styleUrl: './income-type-edit-page.component.scss',
  providers: [IncomeTypeEditPageBuilder, IncomeTypeEditPageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomeTypeEditPageComponent implements OnInit {
  public formGroup: FormGroup<ConvertToForm<IncomeType>>;
  private initialFormGroupState: IncomeType;

  constructor(
    private backNavigationService: BackNavigationService,
    private incomeTypeEditPageService: IncomeTypeEditPageService,
    private incomeTypeEditPageBuilder: IncomeTypeEditPageBuilder,
    private activatedRoute: ActivatedRoute,
    private destroyRef: DestroyRef,
    private navigationService: NavigationService,
    private formErrorMessageService: FormErrorMessageService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.handleRouteIdChange();
  }

  public navigateBack(): void {
    this.backNavigationService.back();
  }

  public saveChanges(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    const incomeType = this.formGroup.getRawValue() as IncomeType;
    this.incomeTypeEditPageService
      .saveChanges(incomeType.id, incomeType)
      .subscribe({
        next: () => {
          this.navigateBack();
        },
      });
  }

  public getErrorMessage(control: AbstractControl): string {
    return this.formErrorMessageService.getControlErrorMessage(control);
  }

  public resetFormValue(): void {
    this.formGroup.setValue(this.initialFormGroupState);
  }

  private handleRouteIdChange(): void {
    this.activatedRoute.params
      .pipe(
        map((params) => params['id']),
        filter((id) => !!id),
        switchMap((id) => this.incomeTypeEditPageService.getIncomeType(id)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((incomeType) => {
        this.changeDetectorRef.markForCheck();
        if (!incomeType) {
          this.navigationService.goToHomePage();
        } else {
          this.formGroup =
            this.incomeTypeEditPageBuilder.createFormGroup(incomeType);
          this.initialFormGroupState = {
            ...(this.formGroup.getRawValue() as IncomeType),
          };
        }
      });
  }
}
