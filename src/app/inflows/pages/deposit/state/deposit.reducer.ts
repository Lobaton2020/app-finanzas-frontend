import { createReducer, on } from "@ngrx/store";
import { loadedDeposits } from "./deposit.action";
import { initialState } from "./deposit.state";

const _depositReducer = createReducer(
  initialState,
  on(loadedDeposits, (state, action: any) => {
    const { type: _, ...rest } = action;
    return {
      ...state,
      deposits: rest,
    };
  })
);

export function DepositReducer(state: any, action: any) {
  return _depositReducer(state, action);
}
