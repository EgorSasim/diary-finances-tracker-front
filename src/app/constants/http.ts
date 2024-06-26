import { HttpErrorCode } from '../typings/http';

export const HTTP_ERROR_MESSAGES: { [key in HttpErrorCode]: string } = {
  [HttpErrorCode.UserDuplicate]: 'http.error.userDuplicate',
  [HttpErrorCode.InvalidCreds]: 'http.error.invalidCreds',
  [HttpErrorCode.ExpiredToken]: 'http.error.expiredToken',
  [HttpErrorCode.InvalidOldPassword]: 'http.error.invalidOldPassword',
};
