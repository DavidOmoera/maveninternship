import { createSlice } from "@reduxjs/toolkit";
import { AdminState } from "types/common";
import { makeAdmin } from "./thunks";

const initialState: AdminState = {
  users: [],
  organizations: [],
  loading: false,
  error: undefined,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    clearAdminState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(makeAdmin.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(makeAdmin.fulfilled, (state) => {
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(makeAdmin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearAdminState } = adminSlice.actions;
export default adminSlice.reducer;
