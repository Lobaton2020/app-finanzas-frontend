import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { AuthReducer } from "src/app/auth/state/auth.reducer";
import { AUTH_STATE_NAME } from "src/app/auth/state/auth.selector";
import { AuthState } from "src/app/auth/state/auth.state";
import { InflowReducer } from "src/app/inflows/state/inflow.reducer";
import { INFLOW_STATE_NAME } from "src/app/inflows/state/inflow.select";
import { InflowState } from "src/app/inflows/state/inflows.state";
import { SharedReducer } from "./shared/shared.reducer";
import { SHARED_STATE_NAME } from "./shared/shared.selector";
import { SharedState } from "./shared/shared.state";

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  [AUTH_STATE_NAME]: AuthState;
  [INFLOW_STATE_NAME]: InflowState;
  router: RouterReducerState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
  [AUTH_STATE_NAME]: AuthReducer,
  [INFLOW_STATE_NAME]: InflowReducer,
  router: routerReducer,
};
