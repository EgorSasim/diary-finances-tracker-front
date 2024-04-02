import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { getControlErrorMessage } from '../../../helpers/form-errors';
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

  constructor(private signInBuilder: SignInBuiler) {}

  public getErrorMessage(control: AbstractControl): string {
    return getControlErrorMessage(control).errorText;
  }

  public confirm(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    this.signIn.emit(this.formGroup.value as SignIn);
  }
}
