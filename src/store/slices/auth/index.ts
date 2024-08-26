import { createSlice } from "@reduxjs/toolkit";
import { TAuthState } from "./types";
import { getUserData } from "./thunks";

const initialState: TAuthState = {
  accessToken: "",
  userData: undefined,
  userDataError: undefined,
  userDataLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    updateUserData: (state, action) => {
      state.userData = { ...state.userData, ...action.payload };
    },
    clearUserData: () => ({ ...initialState }),
  },
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
  },
});

export const { updateUserData, clearUserData } = authSlice.actions;
export default authSlice.reducer;
