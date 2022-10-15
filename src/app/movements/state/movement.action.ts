import { EntityListResponse } from "@app/shared/pagination/meta.interface";
import { createAction, props } from "@ngrx/store";
import { MovementResponse } from "../models/moovementListReponse";
export interface IMovementType {
  selectControl: string;
}
export interface PayloadCreateMovement extends IMovementType {
  name: string;
}

const CREATE_MOVEMENT = "[Movement Type] Create";
const LOAD_MOVEMENT_INGRESS = "[Movement Type Ingress] Find all";
const LOADED_MOVEMENT_INGRESS = "[Movement Type Ingress] Set movements";

const LOAD_MOVEMENT_EGRESS = "[Movement Type Egress] Find all";
const LOADED_MOVEMENT_EGRESS = "[Movement Type Egress] Set movements";

export const loadMovementIngress = createAction(
  LOAD_MOVEMENT_INGRESS,
  props<IMovementType>()
);
export const loadMovementEgress = createAction(
  LOAD_MOVEMENT_EGRESS,
  props<IMovementType>()
);

export const loadedMovementIngress = createAction(
  LOADED_MOVEMENT_INGRESS,
  props<EntityListResponse<MovementResponse>>()
);
export const loadedMovementEgress = createAction(
  LOADED_MOVEMENT_EGRESS,
  props<EntityListResponse<MovementResponse>>()
);

export const createMovementType = createAction(
  CREATE_MOVEMENT,
  props<PayloadCreateMovement>()
);
