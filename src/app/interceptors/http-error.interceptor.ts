import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable, Injector, Provider } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Observable, catchError, of } from 'rxjs';
import { HttpErrorCode } from '../typings/http';
import { SnackBarComponent } from '../modules/common/snack-bar/snack-bar.component';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private matSnackBar: MatSnackBar, private injector: Injector) {}

  public intercept(
    httpRequest: HttpRequest<any>,
    httpHandler: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('INTERCEPT');
    return httpHandler.handle(httpRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        const errCode: HttpErrorCode = error?.error?.['message'];
        if (errCode) {
          // const translateService = this.injector.get(TranslateService);
          // translateService
          //   .get(HTTP_ERROR_MESSAGES[errCode])
          //   .subscribe((err) => this.showSnack(err));
          this.showSnack(errCode);
        } else {
          this.showSnack('Error');
        }
        return of(new HttpResponse({ status: error.status, body: {} }));
      })
    );
  }

  private showSnack(message: string): void {
    const horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    const verticalPosition: MatSnackBarVerticalPosition = 'bottom';

    this.matSnackBar.openFromComponent<SnackBarComponent>(SnackBarComponent, {
      data: {
        type: 'Error',
        snackText: message,
        centerText: true,
      },
      horizontalPosition,
      verticalPosition,
      duration: 3000,
    });
  }
}

export const httpErrorInterceptorToken: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpErrorInterceptor,
  multi: true,
};
