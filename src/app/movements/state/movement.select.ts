import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MovementsTypeState } from "./movement.state";

export const MOVEMENT_STATE_NAME = "movement";
const getMovementState =
  createFeatureSelector<MovementsTypeState>(MOVEMENT_STATE_NAME);

export const getMovementTypeIngress = createSelector(
  getMovementState,
  (state) => state.movementsTypeIngress
);

export const getMovementTypeEgress = createSelector(
  getMovementState,
  (state) => state.movementsTypeEgress
);
