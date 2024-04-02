import { FormControl } from '@angular/forms';

export type ConvertToForm<T> = {
  [K in keyof T]: FormControl<T[K] | null>;
};

export enum FormErrorCode {
  Required = 'required',
  InvalidEmail = 'email',
  MaxLength = 'maxlength',
  MinLength = 'minlength',
  MatDatepickerParse = 'matDatepickerParse',
  MatStartDateInvalid = 'matStartDateInvalid',
}

export interface FormError {
  errorText: string;
  params?: { [key: string]: string };
}
