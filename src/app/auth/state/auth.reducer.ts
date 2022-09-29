import { createReducer } from "@ngrx/store";
import { Action, on } from "@ngrx/store";
import { AppState } from "src/app/shared/store/app.state";
import { loginSuccess, LoginSuccessPayload } from "./auth.action";
import { AuthState, initialState } from "./auth.state";

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action: any) => {
    return {
      ...state,
      user: action.user,
    };
  })
);

export const AuthReducer = (state: any, action: any) =>
  _authReducer(state, action);
