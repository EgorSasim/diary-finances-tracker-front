import { FormErrorCode as FormErrorCode } from '../typings/forms';

export const FORM_ERROR_MESSAGES: { [key in FormErrorCode]: string } = {
  [FormErrorCode.Required]: 'form.error.required',
  [FormErrorCode.InvalidEmail]: 'form.error.invalidEmail',
  [FormErrorCode.MaxLength]: 'form.error.maxLength',
};
