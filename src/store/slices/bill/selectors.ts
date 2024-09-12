import { RootState } from "types/common";

export const billsSelector = (state: RootState) => state.bill;
export const trackedBillsSelector = (state: RootState) =>
  state.bill.trackedBills;
