import { EntityListResponse } from "@app/shared/pagination/meta.interface";
import { createAction, props } from "@ngrx/store";
import { MovementResponse, MovementType } from "../models/moovementListReponse";
export interface IMovementType {
  selectControl: string;
}
export interface PayloadCreateMovement extends IMovementType {
  name: string;
}
export interface IRedirectOnError {
  redirect: boolean
}

export interface PayloadUpdateMovementType extends IMovementType, PayloadCreateMovement {
  status: boolean
}

export type PayloadLoadMovementType = MovementType & IMovementType & IRedirectOnError;

const CREATE_MOVEMENT = "[Movement Type] Create";
const LOAD_MOVEMENT_INGRESS = "[Movement Type Ingress] Find all";
const LOADED_MOVEMENT_INGRESS = "[Movement Type Ingress] Set movements";

const LOAD_MOVEMENT_EGRESS = "[Movement Type Egress] Find all";
const LOADED_MOVEMENT_EGRESS = "[Movement Type Egress] Set movements";
const GET_MOVEMENT = "[Movement Type] Get Movement type";
const UPDATE_MOVEMENT = "[Movement Type] Update Movement type";


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



export const loadMovementType = createAction(
  GET_MOVEMENT,
  props<IMovementType & { id: number }>()
);


export const updateMovementType = createAction(
  UPDATE_MOVEMENT,
  props<PayloadUpdateMovementType>()
)