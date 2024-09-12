import { createSlice } from "@reduxjs/toolkit";
import { TbillState } from "types/common";
import { getBills, getTrackedBills } from "./thunks";

const initialState: TbillState = {
  bills: [],
  trackedBills: [],
  isLoadingBills: false,
  totalBillsCount: 0,
};

const billSlice = createSlice({
  name: "bill",
  initialState: initialState,
  reducers: {
    clearbillData: () => ({ ...initialState }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBills.pending, (state) => {
        state.isLoadingBills = true;
      })
      .addCase(getBills.fulfilled, (state, action) => {
        state.bills = action.payload?.items ?? [];
        state.totalBillsCount = action.payload.total;
        state.isLoadingBills = false;
      })
      .addCase(getBills.rejected, (state) => {
        state.isLoadingBills = false;
      })
      .addCase(getTrackedBills.pending, () => {})
      .addCase(getTrackedBills.fulfilled, (state, action) => {
        state.trackedBills = action.payload.items;
      })
      .addCase(getTrackedBills.rejected, (state) => {
        state.trackedBills = [];
      });
  },
});

export const { clearbillData } = billSlice.actions;
export default billSlice.reducer;
