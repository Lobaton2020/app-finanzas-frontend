import { Injectable } from "@angular/core";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class LocalStorageUserService {
  private USER_KEY = "userInformation";
  set(information: any, key: string = this.USER_KEY): void {
    localStorage.setItem(key, JSON.stringify(information));
  }

  get(key: string = this.USER_KEY): User | null {
    const user = localStorage.getItem(key) as string;
    if (!user) {
      return null;
    }
    const { id, refreshToken, accessToken, expirationDate, rol, name } =
      JSON.parse(user);
    return new User(
      id,
      refreshToken,
      accessToken,
      new Date(expirationDate),
      rol,
      name
    );
  }
  remove(key: string = this.USER_KEY) {
    localStorage.removeItem(key);
  }

  isBeforeTwoMinutes() {
    const today = new Date().getTime();
    const user = this.get();
    if (!user) {
      return false;
    }
    const expiration = user.expireDate.getTime();
    return expiration - today < 1000 * 60 * 2; // Si el toquen se vence en menos de 2 minutos entonces lo refrescará
  }
}
