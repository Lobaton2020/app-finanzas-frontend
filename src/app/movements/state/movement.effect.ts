import { Injectable } from "@angular/core";
import { AppState } from "@app/shared/store/app.state";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { MovementTypeService } from "../services/movement-type.service";
import {
  createMovementType,
  IMovementType,
  loadedMovementEgress,
  loadedMovementIngress,
  loadMovementEgress,
  loadMovementIngress,
  PayloadCreateMovement,
} from "./movement.action";
import { catchError, exhaustMap, map, of, take } from "rxjs";
import { setNotifyMessage } from "@app/shared/store/shared/shared.action";
import { getErrorMessage } from "@app/shared/errors/getErrorMessage";
import { EntityListResponse } from "@app/shared/pagination/meta.interface";
import { MovementType } from "../models/moovementListReponse";
@Injectable()
export class MovementTypeEffect {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private movementTypeService: MovementTypeService
  ) {}

  createMovementType$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createMovementType),
      exhaustMap((payload: PayloadCreateMovement) => {
        return this.movementTypeService.create(payload).pipe(
          take(1),
          map(() =>
            setNotifyMessage({ message: "Has añadido un tipo de movimiento" })
          ),
          catchError((e) =>
            of(setNotifyMessage({ message: getErrorMessage(e) }))
          )
        );
      })
    );
  });
  loadMovementIngress$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadMovementIngress),
      exhaustMap((info: IMovementType) => {
        return this.movementTypeService.findAll(info.selectControl).pipe(
          take(1),
          map((data: EntityListResponse<MovementType>) =>
            loadedMovementIngress(data)
          ),
          catchError((e) =>
            of(setNotifyMessage({ message: getErrorMessage(e) }))
          )
        );
      })
    );
  });
  loadMovementEgress$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadMovementEgress),
      exhaustMap((info: IMovementType) => {
        return this.movementTypeService.findAll(info.selectControl).pipe(
          take(1),
          map((data: EntityListResponse<MovementType>) =>
            loadedMovementEgress(data)
          ),
          catchError((e) =>
            of(setNotifyMessage({ message: getErrorMessage(e) }))
          )
        );
      })
    );
  });
}
