export interface NotifyMessage {
  message: string;
  isError: boolean | undefined;
  show?: boolean;
  stopLoader?: boolean;
}
export interface SharedState {
  showLoading: boolean;
  notifyMessage: NotifyMessage;
}

export const initialState: SharedState = {
  showLoading: false,
  notifyMessage: {
    show: false,
    stopLoader: true,
    message: "This is initial",
    isError: false,
  },
};
