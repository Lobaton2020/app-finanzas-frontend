import { createReducer, on } from "@ngrx/store";
import { loadedMovementEgress, loadedMovementIngress } from "./movement.action";
import { initialState } from "./movement.state";

const _movementReducer = createReducer(
  initialState,
  on(loadedMovementEgress, (state, action: any) => {
    const { type: _, ...rest } = action;
    return {
      ...state,
      movementsTypeEgress: rest,
    };
  }),
  on(loadedMovementIngress, (state, action: any) => {
    const { type: _, ...rest } = action;
    return {
      ...state,
      movementsTypeIngress: rest,
    };
  })
);

export const MovementReducer = (state: any, action: any) =>
  _movementReducer(state, action);
