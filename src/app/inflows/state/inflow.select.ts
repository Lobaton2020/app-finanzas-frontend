import { createFeatureSelector, createSelector } from "@ngrx/store";
import { InflowState } from "./inflows.state";

export const INFLOW_STATE_NAME = "inflows";
const getInflowsState = createFeatureSelector<InflowState>(INFLOW_STATE_NAME);
export const getInflows = createSelector(getInflowsState, (state) => {
  return state.inflows;
});
