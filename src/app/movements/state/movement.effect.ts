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
  PayloadUpdateMovementType,
  updateMovementType,
} from "./movement.action";
import { catchError, exhaustMap, map, mergeMap, of, take, tap } from "rxjs";
import { setNotifyMessage } from "@app/shared/store/shared/shared.action";
import { getErrorMessage } from "@app/shared/errors/getErrorMessage";
import { EntityListResponse } from "@app/shared/pagination/meta.interface";
import { MovementType } from "../models/moovementListReponse";
import { Router } from "@angular/router";
@Injectable()
export class MovementTypeEffect {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private movementTypeService: MovementTypeService,
    private router: Router
  ) {}

  createMovementType$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createMovementType),
      mergeMap((payload: PayloadCreateMovement) => {
        console.log("_:_::::::::::::::::::::::::::::::::_:_", payload)
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

  updateMovementType$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateMovementType),
      exhaustMap((info: PayloadUpdateMovementType) => {
        return this.movementTypeService.update(info).pipe(
          take(1),
          map((_) => {
            this.router.navigateByUrl('/movements#' + info.selectControl)
            return setNotifyMessage({ message: `Tipo de movimiento de ${info.selectControl} actualizado` })
          }),
          catchError((e) =>
            of(setNotifyMessage({ message: getErrorMessage(e) }))
          )
        );
      })
    );
  });
}
