import { AbstractControl } from '@angular/forms';
import { FORM_ERROR_MESSAGES } from '../constants/forms';
import { FormError, FormErrorCode } from '../typings/forms';

export function getControlErrorMessage(control: AbstractControl): FormError {
  if (!control.errors) {
    return {
      errorText: '',
    };
  }
  const errCode = (Object.keys(control.errors) as FormErrorCode[]).find(
    (error) => !!FORM_ERROR_MESSAGES[error]
  );
  const params = control.errors?.[errCode as FormErrorCode];
  if (errCode) {
    console.log('err params: ', control.errors[errCode]);
  }

  return errCode
    ? { errorText: FORM_ERROR_MESSAGES[errCode], params }
    : { errorText: 'unhandled form error' };
}
