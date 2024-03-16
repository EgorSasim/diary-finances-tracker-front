import { FormErrorCode as FormErrorCode } from '../typings/forms';

export const FORM_ERROR_MESSAGES: { [key in FormErrorCode]: string } = {
  [FormErrorCode.Required]: 'form.required',
  [FormErrorCode.InvalidEmail]: 'form.invalidEmail',
};
