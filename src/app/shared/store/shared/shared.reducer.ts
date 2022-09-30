import {
  setLoadingSpinner,
  setNotifyErrorMessage,
  setNotifyMessage,
} from "./shared.action";
import { createReducer, on } from "@ngrx/store";
import { initialState } from "./shared.state";
const reducerNotifier = (error: boolean) => (state: any, action: any) => ({
  ...state,
  notifyMessage: {
    show: action.show ?? true,
    message: action.message,
    isError: error,
  },
});

const _sharedReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  }),

  on(setNotifyMessage, reducerNotifier(false)),
  on(setNotifyErrorMessage, reducerNotifier(true))
);

export function SharedReducer(state: any, action: any) {
  return _sharedReducer(state, action);
}
