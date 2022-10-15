import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { RequestHttpService } from "src/app/shared/services/request-http.service";
import { AppState } from "src/app/shared/store/app.state";
import { environment } from "src/environments/environment";
import { LoginResponse } from "../models/login-response.interface";
import { PayloadJwt } from "../models/payload-jwt";
import { User } from "../models/user";
import {
  LoginPayload,
  makeRefreshToken,
  RegisterPayload,
} from "../state/auth.action";
import * as API from "../../shared/config/api";
import { RegisterResponse } from "../models/register-response";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  private endpointModule = "/" + API.ModuleAuth;
  private endpointLogin = "/" + API.EndpointLogin;
  private endpointRefresh = "/" + API.EndpointRefreshToken;
  private endpointRegister = "/" + API.EndpointRegister;
  private idTimeout: any = null;
  constructor(
    private http: RequestHttpService,
    private store: Store<AppState>
  ) {}

  login(credentials: LoginPayload) {
    const url = `${environment.apiBaseUrl}${this.endpointModule}${this.endpointLogin}`;
    return this.http.post<LoginResponse>(url, credentials);
  }
  refreshToken(refreshToken: string) {
    const url = `${environment.apiBaseUrl}${this.endpointModule}${this.endpointRefresh}`;
    return this.http.post<LoginResponse>(url, { refreshToken });
  }
  register(payload: RegisterPayload) {
    const url = `${environment.apiBaseUrl}${this.endpointModule}${this.endpointRegister}`;
    return this.http.post<RegisterResponse>(url, payload);
  }

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
    console.log(this.idTimeout, "CLEAT");
    if (this.idTimeout) {
      clearTimeout(this.idTimeout);
      this.idTimeout = null;
    }
  }
  runTimeoutRefreshToken(user: User) {
    this.cleartTimeout();
    const today = new Date().getTime();
    const expiration = user.expireDate.getTime();
    let time = expiration - today;
    time = time - 60 * 1000; //One minute before the accessToken expire the refreshToken will be to update the new accessToken
    clearTimeout(this.idTimeout)
    this.idTimeout = setTimeout(() => {
      console.log(time, "Executed");
      this.store.dispatch(makeRefreshToken());
    }, time);
    console.log(this.idTimeout, "SETTIMEOUT ACTION", time);
  }

  logout() {
    this.cleartTimeout();
  }
}
