import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { SignInBuiler } from './sign-in.builder';
import { SignIn } from './sign-in.typings';
import { FormErrorMessageService } from '../../../services/form-error-message/form-error-message.service';

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

  constructor(
    private signInBuilder: SignInBuiler,
    private formErrorMessageService: FormErrorMessageService
  ) {}

  public getErrorMessage(control: AbstractControl): string {
    return this.formErrorMessageService.getControlErrorMessage(control);
  }

  public confirm(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    this.signIn.emit(this.formGroup.value as SignIn);
  }
}
