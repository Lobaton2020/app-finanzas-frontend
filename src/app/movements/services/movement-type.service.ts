import { Injectable } from "@angular/core";
import * as API from "@app/shared/config/api";
import { buildQueryPaginator } from "@app/shared/pagination/helpers";
import { EntityListResponse } from "@app/shared/pagination/meta.interface";
import { RequestHttpService } from "@app/shared/services/request-http.service";
import { environment } from "src/environments/environment";
import { MovementType } from "../models/moovementListReponse";
import { MovementCreateResponse } from "../models/movementCreateResponse";
import { IMovementType, PayloadCreateMovement, PayloadUpdateMovementType } from "../state/movement.action";

export const TYPE_INGRESS = "INGRESS";
export const TYPE_EGRESS = "EGRESS";

@Injectable({
  providedIn: "root",
})
export class MovementTypeService {
  private endpointModuleInflow = "/" + API.ModuleInflows;
  private endpointModuleOutflow = "/" + API.ModuleOutflows;
  private endpointMovementType = "/" + API.EndpointType;
  constructor(private readonly http: RequestHttpService) {}

  create(payload: PayloadCreateMovement) {
    const resource = this.getNameResource(payload.selectControl);
    const url = `${environment.apiBaseUrl}${resource}${this.endpointMovementType}`;
    return this.http.post<MovementCreateResponse>(url, { name: payload.name });
  }

  findAll(payload: IMovementType) {
    console.log(payload)
    const resource = this.getNameResource(payload.selectControl);
    const url = `${environment.apiBaseUrl}${resource}${this.endpointMovementType}`;
    return this.http.get<EntityListResponse<MovementType>>(
      url + buildQueryPaginator(payload.page as number, payload.limit as number)
    );
  }

  update(payload: PayloadUpdateMovementType) {
    const resource = this.getNameResource(payload.selectControl);
    const url = `${environment.apiBaseUrl}${resource}${this.endpointMovementType}/${payload.id}`;
    return this.http.put<PayloadUpdateMovementType>(url, {
      name: payload.name,
      status: payload.status,
    });
  }
  private getNameResource(selectControl: string) {
    let resource = this.endpointModuleOutflow;
    if (selectControl.includes(TYPE_INGRESS)) {
      resource = this.endpointModuleInflow;
    }
    return resource;
  }
}
