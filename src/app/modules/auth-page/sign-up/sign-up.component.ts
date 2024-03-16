import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { SignUpBuiler } from './sign-up.builder';
import { getControlErrorMessage } from '../../../helpers/form-errors';
import { AbstractControl } from '@angular/forms';
import { PLACEHOLDERS } from '../../../constants/placeholders';
import { SignUp } from './sign-up.typings';

@Component({
  selector: 'dft-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  providers: [SignUpBuiler],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  @Output() public signUp: EventEmitter<SignUp> = new EventEmitter();
  public formGroup = this.signUpBuilder.createFormGroup();
  public readonly placeholders = PLACEHOLDERS;

  constructor(private signUpBuilder: SignUpBuiler) {}

  public getErrorMessage(control: AbstractControl): string {
    return getControlErrorMessage(control);
  }

  public confirm(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    this.signUp.emit(this.formGroup.value as SignUp);
  }
}
