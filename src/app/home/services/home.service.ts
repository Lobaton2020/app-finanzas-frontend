import { Injectable } from "@angular/core";
import { RequestHttpService } from "src/app/shared/services/request-http.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  constructor(readonly http: RequestHttpService) {}

  getResume() {
    return this.http.get(environment.apiBaseUrl + "/reports/resume");
  }
}
