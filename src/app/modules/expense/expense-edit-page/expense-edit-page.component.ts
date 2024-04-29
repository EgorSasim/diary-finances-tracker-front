import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
} from '@angular/core';
import { ExpenseEditPageBuilder } from './expense-edit-page.builder';
import { AbstractControl, FormGroup } from '@angular/forms';
import {
  Expense,
  ExpenseEditForm,
} from '../../../services/expense/expense.typings';
import { FormErrorMessageService } from '../../../services/form-error-message/form-error-message.service';
import { BackNavigationService } from '../../../services/back-navigation/back-navigation.service';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ExpenseEditPageService } from './expense-edit-page.service';

@Component({
  selector: 'dft-expense-edit-page',
  templateUrl: './expense-edit-page.component.html',
  styleUrl: './expense-edit-page.component.scss',
  providers: [ExpenseEditPageService, ExpenseEditPageBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseEditPageComponent {
  public readonly textAreaHeight: string = '12rem';
  public formGroup: FormGroup<ExpenseEditForm>;
  private initialFormGroupState: Expense;

  constructor(
    private expenseEditPageService: ExpenseEditPageService,
    private expenseEditPageBuilder: ExpenseEditPageBuilder,
    private formErrorMessageService: FormErrorMessageService,
    private backNavigationService: BackNavigationService,
    private activatedRoute: ActivatedRoute,
    private destroyRef: DestroyRef,
    private changeDetectroRef: ChangeDetectorRef
  ) {
    this.handleExpenseIdChange();
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
    this.expenseEditPageService
      .edtiExpense(this.formGroup.getRawValue() as Expense)
      .subscribe(() => {
        this.backNavigationService.back();
      });
  }

  private handleExpenseIdChange(): void {
    this.activatedRoute.params
      .pipe(
        map((params) => params['id']),
        filter((id) => !!id),
        switchMap((id) => this.expenseEditPageService.getExpense(id)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((expense) => {
        if (!expense) {
          this.navigateBack();
          return;
        }
        this.formGroup = this.expenseEditPageBuilder.createFormGroup(expense);
        this.initialFormGroupState = expense;
        this.changeDetectroRef.markForCheck();
      });
  }
}
