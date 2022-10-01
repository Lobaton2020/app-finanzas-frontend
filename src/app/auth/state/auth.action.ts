import { createAction, props } from "@ngrx/store";

const LOGIN_START = "[Auth] login start";
const LOGIN_SUCCESS = "[Auth] login success";
const REFRESH_TOKEN = "[Auth] refresh token";
const LOG_OUT = "[Auth] Log out";
const REGISTER_USER = "[Auth] Register an user";
const VERIFY_SESION = "[Auth] Verify session";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload extends LoginPayload {
  completeName: string;
}
export interface LoginSuccessPayload {
  user: any;
  redirect: boolean;
}





export const registerUser = createAction(
  REGISTER_USER,
  props<RegisterPayload>()
);
export const loginStart = createAction(LOGIN_START, props<LoginPayload>());
export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<LoginSuccessPayload>()
);
export const makeRefreshToken = createAction(REFRESH_TOKEN);
export const logout = createAction(LOG_OUT);
export const verifySession = createAction(VERIFY_SESION);
