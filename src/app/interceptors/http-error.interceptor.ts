import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { Injectable, Injector, Provider, inject } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { EMPTY, Observable, catchError, of } from 'rxjs';
import { HttpErrorCode } from '../typings/http';
import { SnackBarComponent } from '../modules/common/snack-bar/snack-bar.component';
import { TranslateService } from '@ngx-translate/core';
import { HTTP_ERROR_MESSAGES } from '../constants/http';
import { Router } from '@angular/router';
import { ROUTE_PATH } from '../constants/routes-pathes';
import { NavigationService } from '../services/navigation/navigation.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private matSnackBar: MatSnackBar,
    private injector: Injector,
    private router: Router,
    private navigationService: NavigationService
  ) {}

  public intercept(
    httpRequest: HttpRequest<any>,
    httpHandler: HttpHandler
  ): Observable<HttpEvent<any>> {
    return httpHandler.handle(httpRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        const errCode: HttpErrorCode = error?.error?.['message'];
        const translateService = this.injector.get(TranslateService);
        translateService
          .get(
            errCode && HTTP_ERROR_MESSAGES?.[errCode]
              ? HTTP_ERROR_MESSAGES[errCode]
              : 'app.error'
          )
          .subscribe((err) => {
            this.showSnack(err);
          });
        if (error.status === HttpStatusCode.Unauthorized) {
          this.navigationService.goToAuthPage();
        }

        return EMPTY;
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
