import { createAction, props } from "@ngrx/store";
import { IDeposit, PayloadCreateDeposit } from "./deposit.state";

const LOAD_DEPOSITS = "[Deposits] Loading Deposits";
const LOADED_DEPOSITS = "[Deposits] Loaded Deposits";
const CREATE_DEPOSIT = "[Deposits] Create deposit";
const UPDATE_DEPOSIT = "[Deposits] Update Deposit";
export const loadDeposits = createAction(LOAD_DEPOSITS, props<IDeposit>());
export const loadedDeposits = createAction(
  LOADED_DEPOSITS,
  props<{ items: any[]; meta: any }>()
);

export const createDeposit = createAction(
  CREATE_DEPOSIT,
  props<PayloadCreateDeposit>()
);
// export const updateDeposit = createAction(
//   UPDATE_DEPOSIT,
//   props<PayloadUpdateDeposit>()
// );
