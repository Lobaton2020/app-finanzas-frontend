import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/shared/store/app.state";
import { switchMap, map, take, catchError, of } from "rxjs";
import { DepositService } from "../services/deposit.service";
import { createDeposit, loadDeposits, loadedDeposits } from "./deposit.action";
import { IDeposit, PayloadCreateDeposit } from "./deposit.state";
import { setNotifyMessage } from "@app/shared/store/shared/shared.action";
import { getErrorMessage } from "@app/shared/errors/getErrorMessage";
import { DEFAULT_PAGINATION } from "@app/shared/pagination/meta.config";
@Injectable()
export class DepositEffect {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private depositService: DepositService
  ) {}

  loadDeposits$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadDeposits),
      switchMap((info: IDeposit) => {
        return this.depositService.findAll(info).pipe(
          take(1),
          map((data: any) => loadedDeposits(data))
        );
      })
    );
  });

  createDeposit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createDeposit),
      switchMap((info: PayloadCreateDeposit) => {
        return this.depositService.create(info).pipe(
          take(1),
          map(() => {
            this.store.dispatch(loadDeposits(DEFAULT_PAGINATION));
            return setNotifyMessage({ message: "Has añadido un deposito" });
          }),
          catchError((e) =>
            of(setNotifyMessage({ message: getErrorMessage(e) }))
          )
        );
      })
    );
  });
}
