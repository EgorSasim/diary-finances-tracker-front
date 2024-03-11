import { FormControl } from '@angular/forms';

export type ConvertToForm<T> = {
  [K in keyof T]: FormControl<T[K] | null>;
};

export enum FormErrorCode {
  Required = 'required',
  InvalidEmail = 'email',
}
