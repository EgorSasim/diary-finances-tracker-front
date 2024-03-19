import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { TokenService } from '../services/token/token.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    htpRequest: HttpRequest<any>,
    httpHandler: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();
    const req = htpRequest.clone({
      headers: htpRequest.headers.set('authorization', 'Bearer' + ' ' + token),
    });
    return httpHandler.handle(req);
  }
}

export const tokenInterceptorToken: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true,
};
