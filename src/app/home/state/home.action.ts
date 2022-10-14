import { createAction, props } from "@ngrx/store";
import { ReportResume } from "../models/report-resume.interface";

const LOAD_RESUME = "[Reports] Load Resume";
const LOADED_RESUME = "[Reports] Loaded Resume";

export const loadReportResume = createAction(LOAD_RESUME);
export const loadedReportResume = createAction(
  LOADED_RESUME,
  props<{ payload: ReportResume }>()
);
