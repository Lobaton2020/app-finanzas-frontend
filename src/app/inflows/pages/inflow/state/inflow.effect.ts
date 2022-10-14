import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/shared/store/app.state";
import { switchMap, map, take } from "rxjs";
import { InflowService } from "../services/inflow.service";
import { loadedInflows, loadInflows } from "./inflow.action";
@Injectable()
export class InflowEffect {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private inflowService: InflowService
  ) {}

  loadInflows$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadInflows),
      switchMap(() => {
        return this.inflowService.findAll().pipe(
          take(1),
          map((data: any) => loadedInflows(data))
        );
      })
    );
  });
}
