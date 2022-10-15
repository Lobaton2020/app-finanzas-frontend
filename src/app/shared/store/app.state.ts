import { MovementReducer } from "@app/movements/state/movement.reducer";
import { MOVEMENT_STATE_NAME } from "@app/movements/state/movement.select";
import { MovementsTypeState } from "@app/movements/state/movement.state";
import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { AuthReducer } from "src/app/auth/state/auth.reducer";
import { AUTH_STATE_NAME } from "src/app/auth/state/auth.selector";
import { AuthState } from "src/app/auth/state/auth.state";
import { ReportReducer } from "src/app/home/state/home.reducer";
import { REPORT_STATE_NAME } from "src/app/home/state/home.select";
import { ReportState } from "src/app/home/state/home.state";
import { InflowReducer } from "src/app/inflows/pages/inflow/state/inflow.reducer";
import { INFLOW_STATE_NAME } from "src/app/inflows/pages/inflow/state/inflow.select";
import { InflowState } from "src/app/inflows/pages/inflow/state/inflows.state";
import { SharedReducer } from "./shared/shared.reducer";
import { SHARED_STATE_NAME } from "./shared/shared.selector";
import { SharedState } from "./shared/shared.state";

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  [AUTH_STATE_NAME]: AuthState;
  [INFLOW_STATE_NAME]: InflowState;
  [REPORT_STATE_NAME]: ReportState;
  [MOVEMENT_STATE_NAME]: MovementsTypeState;
  router: RouterReducerState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
  [AUTH_STATE_NAME]: AuthReducer,
  [INFLOW_STATE_NAME]: InflowReducer,
  [REPORT_STATE_NAME]: ReportReducer,
  [MOVEMENT_STATE_NAME]: MovementReducer,
  router: routerReducer,
};
