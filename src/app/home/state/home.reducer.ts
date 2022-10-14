import { createReducer, on } from "@ngrx/store";
import { loadedReportResume } from "./home.action";
import { initialState } from "./home.state";

const _reportReducer = createReducer(
  initialState,
  on(loadedReportResume, (state, action) => {
    return {
      ...state,
      resume: action.payload,
    };
  })
);

export function ReportReducer(state: any, action: any) {
  return _reportReducer(state, action);
}
