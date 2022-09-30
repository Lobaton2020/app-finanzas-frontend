import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as Routes from "../../shared/config/routes";
import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  of,
  tap,
  throwError,
} from "rxjs";
import { AppState } from "src/app/shared/store/app.state";
import {
  setLoadingSpinner,
  setNotifyMessage,
} from "src/app/shared/store/shared/shared.action";
import { AuthService } from "../services/auth.service";
import {
  LoginPayload,
  loginStart,
  loginSuccess,
  logout,
  makeRefreshToken,
  verifySession,
} from "./auth.action";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { LocalStorageUserService } from "../services/local-storage-user.service";
import { PayloadJwt } from "../models/payload-jwt";
import { LoginResponse } from "../models/login-response.interface";
import { Router } from "@angular/router";
import { isUserAuthenticated } from "./auth.selector";
import { User } from "../models/user";
import { Observable } from "rxjs";
import { getErrorMessage } from "../util/getErrorMessage";

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private localStorateService: LocalStorageUserService,
    private router: Router
  ) {}
  loginStart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      map(({ email, password }) => ({ email, password })),
      mergeMap((credentials) => {
        return this.authService.login(credentials).pipe(
          map((data: LoginResponse) => {
            const jwtPayload: PayloadJwt = jwt_decode(data.accessToken);
            const user = this.authService.formatUser(data, jwtPayload);
            this.localStorateService.set(user);
            this.authService.runTimeoutRefreshToken(user);
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return loginSuccess({ user, redirect: true });
          }),
          catchError((e) =>
            of(setNotifyMessage({ message: getErrorMessage(e) }))
          )
        );
      })
    );
  });

  refreshToken$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(makeRefreshToken),
        exhaustMap((act) => {
          const user = this.localStorateService.get();
          if (!user) {
            return throwError(
              () => new Error("User doesn't exist on local, Please login")
            );
          }
          return this.authService.refreshToken(user?.userRefreshToken).pipe(
            map((data: LoginResponse) => {
              const jwtPayload: PayloadJwt = jwt_decode(data.accessToken);
              const user = this.authService.formatUser(data, jwtPayload);
              this.authService.runTimeoutRefreshToken(user);
              this.localStorateService.set(user);
              this.store.dispatch(loginSuccess({ user, redirect: false }));
              return of({});
            })
          );
        }),
        tap(() =>
          console.log("Se ha actualizado el usuario antes de cerrar sesion")
        ),
        catchError((e) => of(setNotifyMessage({ message: getErrorMessage(e) })))
      );
    },
    {
      dispatch: false,
    }
  );

  loginSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccess),
        tap((action) => {
          if (action.redirect) {
            this.router.navigate([Routes.RouteHome]);
          }
          return of({});
        })
      );
    },
    { dispatch: false }
  );

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(logout),
        tap(() => {
          this.authService.logout();
          this.localStorateService.remove();
          return this.router.navigate([
            Routes.RouteAuthModule,
            Routes.RouteLogin,
          ]);
        })
      );
    },
    { dispatch: false }
  );

  verifySession$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(verifySession),
        tap(() => {
          if (!isUserAuthenticated()) {
            return this.router.navigate([
              Routes.RouteAuthModule,
              Routes.RouteLogin,
            ]);
          }
          return this.authService.runTimeoutRefreshToken(
            this.localStorateService.get() as User
          );
        })
      );
    },
    { dispatch: false }
  );
}
