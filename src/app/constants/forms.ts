import { FormErrorCode as FormErrorCode } from '../typings/forms';

export const FORM_ERROR_MESSAGES: { [key in FormErrorCode]: string } = {
  [FormErrorCode.Required]: 'form.error.required',
  [FormErrorCode.InvalidEmail]: 'form.error.invalidEmail',
  [FormErrorCode.MaxLength]: 'form.error.maxLength',
  [FormErrorCode.MinLength]: 'form.error.minLength',
  [FormErrorCode.MatDatepickerParse]: 'form.error.matDatepicerParse',
  [FormErrorCode.MatStartDateInvalid]: 'form.error.matStartDateInvalid',
  [FormErrorCode.OldNewPassword]: 'form.error.oldNewPassword',
  [FormErrorCode.Min]: 'form.error.min',
  [FormErrorCode.Pattern]: 'form.error.pattern',
};
