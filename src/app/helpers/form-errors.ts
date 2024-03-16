import { AbstractControl } from '@angular/forms';
import { FORM_ERROR_MESSAGES } from '../constants/forms';
import { FormErrorCode } from '../typings/forms';

export function getControlErrorMessage(control: AbstractControl): string {
  if (!control.errors) {
    return '';
  }
  const errCode = (Object.keys(control.errors) as FormErrorCode[]).find(
    (error) => !!FORM_ERROR_MESSAGES[error]
  );

  return errCode ? FORM_ERROR_MESSAGES[errCode] : 'unhandled form error';
}
