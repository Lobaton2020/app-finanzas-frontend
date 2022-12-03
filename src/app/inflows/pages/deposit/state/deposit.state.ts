import { IPagination } from "@app/shared/pagination/meta.interface";

export interface IDeposit extends IPagination {}
export interface Deposit {
  name: string;
}
export interface DepositState {
  deposits: Deposit[];
  depositDetail: unknown;
}
export const initialState: DepositState = {
  depositDetail: {},
  deposits: [],
};
