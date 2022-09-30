import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RequestHttpService extends HttpClient {
  // This is a wrapper to implement my own methods if the backend has some specifications
}
