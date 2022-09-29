import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, exhaustMap } from "rxjs";
import { AppState } from "src/app/shared/store/app.state";
import { Store } from "@ngrx/store";
import { getToken } from "../state/auth.selector";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this.store.select(getToken).pipe(
      exhaustMap((token: string) => {
        if (!token) {
          return next.handle(request);
        }
        const copyRequest = request.clone({
          headers: request.headers.set("Authorization", `Bearer ${token}`),
        });
        return next.handle(copyRequest);
      })
    );
  }
}
