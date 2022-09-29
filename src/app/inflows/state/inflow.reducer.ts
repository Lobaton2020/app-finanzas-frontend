import { createReducer, on } from "@ngrx/store";
import { Actions } from "@ngrx/store-devtools/src/reducer";
import { loadedInflows, loadInflows } from "./inflow.action";
import { InflowState, initialState } from "./inflows.state";

const _inflowReducer = createReducer(
  initialState,
  on(loadedInflows, (state, action) => {
    return {
      ...state,
      inflows: action.items,
    };
  })
);

export function InflowReducer(state: any, action: any) {
  return _inflowReducer(state, action);
}
