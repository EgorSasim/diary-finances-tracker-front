import { AbstractControl } from '@angular/forms';
import { FORM_ERROR_MESSAGES } from '../constants/forms';
import { FormError, FormErrorCode } from '../typings/forms';
import moment from 'moment';

export function getControlErrorMessage(control: AbstractControl): FormError {
  if (!control.errors) {
    return {
      errorText: '',
    };
  }
  const errCode = (Object.keys(control.errors) as FormErrorCode[]).find(
    (error) => !!FORM_ERROR_MESSAGES[error]
  );

  let params;
  if (errCode) {
    params = control.errors?.[errCode];
    for (const key in params) {
      if (params[key] instanceof Date) {
        params[key] = moment(params[key]).format('M/DD/YYYY');
      }
    }
  }

  return errCode
    ? { errorText: FORM_ERROR_MESSAGES[errCode], params }
    : { errorText: 'unhandled form error' };
}
