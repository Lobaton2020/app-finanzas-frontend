import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as Routes from "../../shared/config/routes";
import { catchError, map, of, switchMap, take, tap } from "rxjs";
import { AppState } from "src/app/shared/store/app.state";
import {
  setLoadingSpinner,
  setNotifyMessage,
} from "src/app/shared/store/shared/shared.action";
import { AuthService } from "../services/auth.service";
import {
  loginStart,
  loginSuccess,
  logout,
  makeRefreshToken,
  registerUser,
  verifySession,
} from "./auth.action";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { LocalStorageUserService } from "../services/local-storage-user.service";
import { PayloadJwt } from "../models/payload-jwt";
import { LoginResponse } from "../models/login-response.interface";
import { Router } from "@angular/router";
import { isUserAuthenticated } from "./auth.selector";
import { User } from "../models/user";
import { getErrorLoginMessage } from "../errors/getErrorLoginMessage";
import { getErrorRegisterMessage } from "../errors/getErrorRegisterMessage";
let test = 0;
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
      switchMap((credentials) => {
        return this.authService.login(credentials).pipe(
          take(1),
          map((data: LoginResponse) => {
            const jwtPayload: PayloadJwt = jwt_decode(data.accessToken);
            const user = this.authService.formatUser(data, jwtPayload);
            this.localStorateService.set(user);
            this.authService.runTimeoutRefreshToken(user);
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return loginSuccess({ user, redirect: true });
          }),
          catchError((e) =>
            of(setNotifyMessage({ message: getErrorLoginMessage(e) }))
          )
        );
      })
    );
  });

  refreshToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(makeRefreshToken),
      switchMap((action) => {
        const user = this.localStorateService.get() as any;
        return this.authService.refreshToken(user["userRefreshToken"]).pipe(
          take(1),
          map((data: LoginResponse) => {
            const jwtPayload: PayloadJwt = jwt_decode(data.accessToken);
            const user = this.authService.formatUser(data, jwtPayload);
            this.authService.runTimeoutRefreshToken(user);
            this.localStorateService.set(user);
            return loginSuccess({ user, redirect: false });
          }),
          catchError((e) =>
            of(setNotifyMessage({ message: getErrorLoginMessage(e) }))
          )
        );
      }),
      catchError((e) =>
        of(
          setNotifyMessage({
            message: getErrorLoginMessage(e),
          })
        )
      )
    );
  });

  registerUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerUser),
      map(({ completeName, email, password }) => ({
        completeName,
        email,
        password,
      })),
      switchMap((payload) => {
        return this.authService.register(payload).pipe(
          take(1),
          map((result) => {
            this.store.dispatch(
              setNotifyMessage({ message: "Registrado con exito!" })
            );
            return loginStart(payload);
          }),
          catchError((e) =>
            of(setNotifyMessage({ message: getErrorRegisterMessage(e) }))
          )
        );
      })
    );
  });

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
            this.authService.logout();
            this.localStorateService.remove();
            return this.router.navigate([
              Routes.RouteAuthModule,
              Routes.RouteLogin,
            ]);
          }
          const user = this.localStorateService.get();
          this.store.dispatch(loginSuccess({ user: user, redirect: false }));
          return this.authService.runTimeoutRefreshToken(user as User);
        })
      );
    },
    { dispatch: false }
  );
}
