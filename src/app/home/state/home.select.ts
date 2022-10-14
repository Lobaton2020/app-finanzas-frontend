import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ReportState } from "./home.state";

export const REPORT_STATE_NAME = "reports_resume";
const getInflowsState = createFeatureSelector<ReportState>(REPORT_STATE_NAME);

export const getResume = createSelector(getInflowsState, (state) => {
  return state.resume;
});
