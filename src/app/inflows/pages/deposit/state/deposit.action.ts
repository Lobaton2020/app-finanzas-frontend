import { createAction, props } from "@ngrx/store";
import { IDeposit } from "./deposit.state";

const LOAD_DEPOSITS = "[Deposits] Loading Deposits";
const LOADED_DEPOSITS = "[Deposits] Loaded Deposits";
export const loadDeposits = createAction(LOAD_DEPOSITS, props<IDeposit>());
export const loadedDeposits = createAction(
  LOADED_DEPOSITS,
  props<{ items: any[]; meta: any }>()
);
