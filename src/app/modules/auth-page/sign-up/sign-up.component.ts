import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { SignUpBuiler } from './sign-up.builder';
import { AbstractControl } from '@angular/forms';
import { SignUp } from './sign-up.typings';
import { FormErrorMessageService } from '../../../services/form-error-message/form-error-message.service';

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

  constructor(
    private signUpBuilder: SignUpBuiler,
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
    this.signUp.emit(this.formGroup.value as SignUp);
  }
}
