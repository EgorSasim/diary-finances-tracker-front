import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { FormErrorCode } from '../../typings/forms';
import { FORM_ERROR_MESSAGES } from '../../constants/forms';
import moment from 'moment';

@Injectable({ providedIn: 'root' })
export class FormErrorMessageService {
  constructor(private translateService: TranslateService) {}

  public getControlErrorMessage(control: AbstractControl): string {
    if (!control.errors) {
      return '';
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
      ? this.translateService.instant(FORM_ERROR_MESSAGES[errCode], params)
      : 'unhandled form error';
  }
}
