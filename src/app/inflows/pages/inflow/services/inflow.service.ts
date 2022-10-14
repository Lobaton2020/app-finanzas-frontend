import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { of } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class InflowService {
  constructor(private http: HttpClient) {}
  findAll() {
    return this.http.get(environment.apiBaseUrl + "/inflows");
  }

  create(payload: object) {
    console.log("CREATING", payload);
    return of([]);
  }
}
