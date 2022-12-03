import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DepositState } from "./deposit.state";

export const DEPOSIT_STATE_NAME = "deposits";
const getDespositsState =
  createFeatureSelector<DepositState>(DEPOSIT_STATE_NAME);
export const getDesposits = createSelector(getDespositsState, (state) => {
  return state.deposits;
});
