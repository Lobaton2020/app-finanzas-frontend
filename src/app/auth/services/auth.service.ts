import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/shared/store/app.state";
import { environment } from "src/environments/environment";
import { LoginResponse } from "../models/login-response.interface";
import { PayloadJwt } from "../models/payload-jwt";
import { User } from "../models/user";
import { LoginPayload, makeRefreshToken } from "../state/auth.action";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private endpoingModule = "/auth";
  private endpointLogin = "/signin";
  private endpointRefresh = "/refreshToken";
  private idTimeout: number | null = null;
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  login(credentials: LoginPayload) {
    const url = `${environment.apiBaseUrl}${this.endpoingModule}${this.endpointLogin}`;
    return this.http.post<LoginResponse>(url, credentials);
  }
  refreshToken(refreshToken: string) {
    const url = `${environment.apiBaseUrl}${this.endpoingModule}${this.endpointRefresh}`;
    return this.http.post<LoginResponse>(url, { refreshToken });
  }
  // register() {}

  formatUser(data: LoginResponse, jwtPayload: PayloadJwt): User {
    const { accessToken, refreshToken } = data;
    const { sub, exp, rol, name } = jwtPayload;
    return new User(
      sub.toString(),
      refreshToken,
      accessToken,
      new Date(exp * 1000),
      rol,
      name
    );
  }
  cleartTimeout() {
    if (this.idTimeout) {
      clearInterval(this.idTimeout);
      this.idTimeout = null;
    }
  }
  runTimeoutRefreshToken(user: User) {
    this.cleartTimeout();
    const today = new Date().getTime();
    const expiration = user.expireDate.getTime();
    let time = expiration - today;
    time = time - 60 * 1000; //One minute before the accessToken expire the refreshToken will be to update the new accessToken
    console.log(time);
    setTimeout(() => {
      this.store.dispatch(makeRefreshToken());
    }, time);
  }

  logout() {
    this.cleartTimeout();
  }
}
