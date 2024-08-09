import { createSlice } from "@reduxjs/toolkit";
import { TOrganizationState } from "./types";

const initialState: TOrganizationState = {
  organizationData: undefined,
  organizationDataError: undefined,
  organizationDataLoading: false,
};

const organizationSlice = createSlice({
  name: "organization",
  initialState: initialState,
  reducers: {
    updateOrganizationData: (state, action) => {
      state.organizationData = { ...state.organizationData, ...action.payload };
    },
    clearOrganizationData: () => ({ ...initialState }),
  },
});

export const { updateOrganizationData, clearOrganizationData } =
  organizationSlice.actions;
export default organizationSlice.reducer;
