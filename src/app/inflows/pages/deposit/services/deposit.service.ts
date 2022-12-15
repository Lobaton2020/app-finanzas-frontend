import { Injectable } from "@angular/core";
import { RequestHttpService } from "@app/shared/services/request-http.service";
import * as API from "@app/shared/config/api";
import { environment } from "src/environments/environment";
import { EntityListResponse } from "@app/shared/pagination/meta.interface";
import {
  Deposit,
  IDeposit,
  PayloadCreateDeposit,
} from "../state/deposit.state";
import { buildQueryPaginator } from "@app/shared/pagination/helpers";
@Injectable({
  providedIn: "root",
})
export class DepositService {
  private endpointModuleDeposits =
    "/" + API.ModuleInflows + "/" + API.EndpointDeposit;
  constructor(private readonly http: RequestHttpService) {}

  findAll(payload: IDeposit) {
    const url = `${environment.apiBaseUrl}${this.endpointModuleDeposits}`;
    return this.http.get<EntityListResponse<Deposit>>(
      url + buildQueryPaginator(payload.page as number, payload.limit as number)
    );
  }

  create(payload: PayloadCreateDeposit) {
    const url = `${environment.apiBaseUrl}${this.endpointModuleDeposits}`;
    return this.http.post(url, { name: payload.name });
  }
}
