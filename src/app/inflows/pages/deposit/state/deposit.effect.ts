import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/shared/store/app.state";
import { switchMap, map, take } from "rxjs";
import { DepositService } from "../services/deposit.service";
import { loadDeposits, loadedDeposits } from "./deposit.action";
import { IDeposit } from "./deposit.state";
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
}
