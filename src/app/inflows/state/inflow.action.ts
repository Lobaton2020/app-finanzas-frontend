import { createAction, props } from "@ngrx/store";

const LOAD_INFLOWS = "[Inflows] Loading inflows";
const LOADED_INFLOWS = "[Inflows] Loaded inflows";
export const loadInflows = createAction(LOAD_INFLOWS);
export const loadedInflows = createAction(
  LOADED_INFLOWS,
  props<{ items: any[]; meta: any }>()
);
