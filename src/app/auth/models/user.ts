import { Rol } from "./payload-jwt";

export class User {
  constructor(
    private id: string,
    private refreshToken: string,
    private accessToken: string,
    private expirationDate: Date,
    private rol: Rol,
    private name: string
  ) {}

  get expireDate() {
    return this.expirationDate;
  }
  get userAccessToken() {
    return this.accessToken;
  }
  get userRefreshToken() {
    return this.refreshToken;
  }
  get userRol(): Rol {
    return this.rol;
  }
  get userName() {
    return this.name;
  }
  get userId() {
    return this.id;
  }
}
