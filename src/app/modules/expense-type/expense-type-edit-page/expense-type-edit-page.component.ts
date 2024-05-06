import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnInit,
} from '@angular/core';
import { BackNavigationService } from '../../../services/back-navigation/back-navigation.service';
import { ExpenseTypeEditPageBuilder } from './expense-type-edit-page.builder';
import { ExpenseTypeEditPageService } from './expense-type-edit-page.service';
import { ExpenseType } from '../../../services/expense-type/expense-type.typings';
import { ConvertToForm } from '../../../typings/forms';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationService } from '../../../services/navigation/navigation.service';
import { FormErrorMessageService } from '../../../services/form-error-message/form-error-message.service';

@Component({
  selector: 'dft-expense-type-edit-page',
  templateUrl: './expense-type-edit-page.component.html',
  styleUrl: './expense-type-edit-page.component.scss',
  providers: [ExpenseTypeEditPageBuilder, ExpenseTypeEditPageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseTypeEditPageComponent implements OnInit {
  public formGroup: FormGroup<ConvertToForm<ExpenseType>>;
  private initialFormGroupState: ExpenseType;

  constructor(
    private backNavigationService: BackNavigationService,
    private expenseTypeEditPageService: ExpenseTypeEditPageService,
    private expenseTypeEditPageBuilder: ExpenseTypeEditPageBuilder,
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
    const expenseType = this.formGroup.getRawValue() as ExpenseType;
    this.expenseTypeEditPageService
      .saveChanges(expenseType.id, expenseType)
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
        switchMap((id) => this.expenseTypeEditPageService.getExpenseType(id)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((expenseType) => {
        console.log('expense type:', expenseType);
        this.changeDetectorRef.markForCheck();
        if (!expenseType) {
          this.navigationService.goToHomePage();
        } else {
          this.formGroup =
            this.expenseTypeEditPageBuilder.createFormGroup(expenseType);
          this.initialFormGroupState = {
            ...(this.formGroup.getRawValue() as ExpenseType),
          };
        }
      });
  }
}
