import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "../models/user";
import { LocalStorageUserService } from "../services/local-storage-user.service";
import { AuthState } from "./auth.state";

export function isUserAuthenticated() {
  const localStorageUserService = new LocalStorageUserService();
  const today = new Date().getTime();
  const user = localStorageUserService.get();
  if (!user) {
    return false;
  }
  const expiration = user.expireDate.getTime();
  return expiration - today > 0;
}
export const AUTH_STATE_NAME = "auth";
const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const isAuthenticated = createSelector(getAuthState, (state) => {
  return isUserAuthenticated();
});

/**
 * Please be careful with: The instace user has some getter functions but i try to access to the accessToken directly and not using getters.
 */
export const getToken = createSelector(getAuthState, (state) => {
  const user: User = state.user || {};
  return user["accessToken"];
});
