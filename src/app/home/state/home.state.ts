import { ReportResume } from "../models/report-resume.interface";

export interface ReportState {
  resume: ReportResume;
}
export const initialState: ReportState = {
  resume: {} as ReportResume,
};
