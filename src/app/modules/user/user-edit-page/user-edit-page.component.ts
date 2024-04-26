import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
} from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { UserEdit, UserEditForm } from '../../../services/user/user.typings';
import { UserEditPageService } from './user-edit-page.service';
import { UserEditPageBuilder } from './user-edit-page.builder';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormErrorMessageService } from '../../../services/form-error-message/form-error-message.service';
import { BackNavigationService } from '../../../services/back-navigation/back-navigation.service';

@Component({
  selector: 'dft-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrl: './user-edit-page.component.scss',
  providers: [UserEditPageService, UserEditPageBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditPageComponent {
  public formGroup: FormGroup<UserEditForm>;
  private formGroupInitialState: UserEdit;

  constructor(
    private destroyRef: DestroyRef,
    private userEditPageService: UserEditPageService,
    private userEditPageBuilder: UserEditPageBuilder,
    private formErrorMessageService: FormErrorMessageService,
    private cdr: ChangeDetectorRef,
    private backNavigationService: BackNavigationService
  ) {
    this.setFormGroupVaue();
  }

  public getErrorMessage(control: AbstractControl): string {
    return this.formErrorMessageService.getControlErrorMessage(control);
  }

  public goBack(): void {
    this.backNavigationService.back();
  }

  public resetForm(): void {
    this.formGroup.setValue(this.formGroupInitialState);
  }

  public saveChanages(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    this.userEditPageService
      .updateUser(this.formGroup.value as UserEdit)
      .subscribe(() => this.backNavigationService.back());
  }

  private setFormGroupVaue(): void {
    this.userEditPageService
      .getUserInfo()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((user) => {
        this.formGroup = this.userEditPageBuilder.createFormGroup(user);
        this.formGroupInitialState = this.formGroup.getRawValue() as UserEdit;
        this.cdr.markForCheck();
      });
  }
}
