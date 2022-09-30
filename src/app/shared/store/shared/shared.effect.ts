import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  setLoadingSpinner,
  setNotifyErrorMessage,
  setNotifyMessage,
} from "./shared.action";
import { tap } from "rxjs/operators";
import { AppState } from "../app.state";
import { Store } from "@ngrx/store";
import { initialState } from "./shared.state";
@Injectable()
export class SharedEffect {
  constructor(private actions$: Actions, private store: Store<AppState>) {}
  // When I show a message I can stop the bar progress, If I dont i pass the parameter stopLoader: false
  setNotifyMessage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(setNotifyMessage, setNotifyErrorMessage),
        tap((action) => {
          const stopLoader =
            action.stopLoader ?? initialState.notifyMessage.stopLoader;
          if (stopLoader) {
            this.store.dispatch(setLoadingSpinner({ status: false }));
          }
        })
      );
    },
    { dispatch: false }
  );
}
