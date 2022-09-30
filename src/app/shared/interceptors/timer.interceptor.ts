import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class TimerInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const init = Date.now();
    if (!environment.production) {
      return next
        .handle(request)
        .pipe(
          tap(() => console.log('Time req: ' + (Date.now() - init) + ' ms'))
        );
    }
    return next.handle(request);
  }
}
