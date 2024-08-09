import { createSlice } from "@reduxjs/toolkit";
import { TAuthState } from "./types";

const initialState: TAuthState = {
  userData: undefined,
  userDataError: undefined,
  userDataLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    updateUserData: (state, action) => {
      state.userData = action.payload;
    },
    clearUserData: () => ({ ...initialState }),
  },
});

export const { updateUserData, clearUserData } = authSlice.actions;
export default authSlice.reducer;
