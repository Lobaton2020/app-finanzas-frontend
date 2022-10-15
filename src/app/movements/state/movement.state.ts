import {
  EntityListResponse,
  MetaPaginationModel,
} from "@app/shared/pagination/meta.interface";
import { MovementType } from "../models/moovementListReponse";

export interface MovementsTypeState {
  movementsTypeEgress: EntityListResponse<MovementType>;
  movementsTypeIngress: EntityListResponse<MovementType>;
}
export const initialState: MovementsTypeState = {
  movementsTypeEgress: {
    items: [],
    meta: new MetaPaginationModel(),
  },
  movementsTypeIngress: {
    items: [],
    meta: new MetaPaginationModel(),
  },
};
