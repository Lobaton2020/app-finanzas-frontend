import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}
  //TESTING
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // console.log(request, 'TEST_______________________');
    // return next.handle(request).pipe(
    //   tap((res) => console.log(res, 'respuesta')),
    //   catchError((e: any) => {
    //     alert('ERROR!');
    //     return throwError(() => new Error(e.message));
    //   })
    // );
    return next.handle(request);
  }
}
