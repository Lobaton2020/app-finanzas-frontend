import { createAction, props } from "@ngrx/store";
export const SET_LOADING_ACTION = "[Shared] set loading spinner";
export const SET_NOTIFY_MESSAGE = "[Shared] Notify Message";
export const SET_NOTIFY_ERROR_MESSAGE = "[Shared] Notify Error message";

export interface PayloadSetNotification {
  message: string;
  stopLoader?: boolean;
  show?: boolean;
}

export const setLoadingSpinner = createAction(
  SET_LOADING_ACTION,
  props<{ status: boolean }>()
);

export const setNotifyMessage = createAction(
  SET_NOTIFY_MESSAGE,
  props<PayloadSetNotification>()
);

export const setNotifyErrorMessage = createAction(
  SET_NOTIFY_ERROR_MESSAGE,
  props<PayloadSetNotification>()
);
