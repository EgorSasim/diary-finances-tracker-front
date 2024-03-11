import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { PLACEHOLDERS } from '../../../common/constants/placeholders';
import { AbstractControl } from '@angular/forms';
import { getControlErrorMessage } from '../../../common/helpers/form-errors';
import { SignInBuiler } from './sign-in.builder';
import { SignIn } from './sign-in.typings';

@Component({
  selector: 'dft-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  providers: [SignInBuiler],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  @Output() public signIn: EventEmitter<SignIn> = new EventEmitter();
  public formGroup = this.signInBuilder.createFormGroup();
  public readonly placeholders = PLACEHOLDERS;

  constructor(private signInBuilder: SignInBuiler) {}

  public getErrorMessage(control: AbstractControl): string {
    return getControlErrorMessage(control);
  }

  public confirm(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    this.signIn.emit(this.formGroup.value as SignIn);
  }
}
