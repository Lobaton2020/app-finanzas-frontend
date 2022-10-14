export interface Inflow {
  name: string;
}
export interface InflowState {
  inflows: Inflow[];
}
export const initialState: InflowState = {
  inflows: [],
};
