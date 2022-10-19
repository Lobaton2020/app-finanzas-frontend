import { createReducer, on } from "@ngrx/store";
import { MovementType } from "../models/moovementListReponse";
import { TYPE_INGRESS } from "../services/movement-type.service";
import { loadedMovementEgress, loadedMovementIngress, loadMovementType } from "./movement.action";
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
  }),

  on(loadMovementType, (state, action: any) => {
    let collectionType: MovementType[] = state.movementsTypeEgress.items;
    if (action.selectControl.includes(TYPE_INGRESS.toLowerCase())) {
      collectionType = state.movementsTypeIngress.items;
    }
    const result = collectionType.find((e) => e.id == action.id);
    if (!result) {
      console.error("The movementType doesn't exist and must exist on the list")
      return {
        ...state,
        movementTypeDetail: {
          ...state.movementTypeDetail,
          selectControl: action.selectControl,
          redirect: true
        },
      };
    }
    const movementTypeDetail = {
      ...result,
      selectControl: action.selectControl,
      redirect: false
    }
    return {
      ...state,
      movementTypeDetail,
    };
  })
);

export const MovementReducer = (state: any, action: any) =>
  _movementReducer(state, action);
