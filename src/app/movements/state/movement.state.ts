import {
  EntityListResponse,
  MetaPaginationModel,
} from "@app/shared/pagination/meta.interface";
import { MovementType } from "../models/moovementListReponse";
import { IMovementType, IRedirectOnError, PayloadLoadMovementType } from "./movement.action";

export interface MovementsTypeState {
  movementsTypeEgress: EntityListResponse<MovementType>;
  movementsTypeIngress: EntityListResponse<MovementType>;
  movementTypeDetail: PayloadLoadMovementType
}
export const initialState: MovementsTypeState = {
  movementTypeDetail: {
    id: 0,
    name: "",
    status: false,
    selectControl: "",
    redirect: false
  },
  movementsTypeEgress: {
    items: [],
    meta: new MetaPaginationModel(),
  },
  movementsTypeIngress: {
    items: [],
    meta: new MetaPaginationModel(),
  },
};
