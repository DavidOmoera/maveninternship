import { createSlice } from "@reduxjs/toolkit";
import { TbillState } from "types/common";
import { getBills } from "./thunks";

const initialState: TbillState = {
  bills: [],
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
      });
  },
});

export const { clearbillData } = billSlice.actions;
export default billSlice.reducer;
