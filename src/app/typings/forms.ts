import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';

export type ConvertToForm<T> = {
  [K in keyof T]: FormControl<T[K] | null>;
};

export type FormData<T> = T extends FormControl<infer FormControlData>
  ? FormControlData
  : T extends FormGroup<infer FormGroupData>
  ? FormData<FormGroupData>
  : T extends FormArray<infer FormArrayData>
  ? FormData<FormArrayData>[]
  : T extends { [K in keyof T]: AbstractControl<unknown> }
  ? { [K in keyof T]: FormData<T[K]> }
  : never;

export enum FormErrorCode {
  Required = 'required',
  InvalidEmail = 'email',
  MaxLength = 'maxlength',
  MinLength = 'minlength',
  MatDatepickerParse = 'matDatepickerParse',
  MatStartDateInvalid = 'matStartDateInvalid',
  OldNewPassword = 'oldNewPassword',
  Min = 'min',
  Pattern = 'pattern',
}

export interface FormError {
  errorText: string;
  params?: { [key: string]: string };
}
