import { createSlice } from "@reduxjs/toolkit";
import { TAuthState } from "./types";
import { getUserData, signUp } from "./thunks";

const initialState: TAuthState = {
  accessToken: "",
  userData: undefined,
  userDataError: undefined,
  userDataLoading: false,
  isSigningUp: false,
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
    builder
      .addCase(getUserData.fulfilled, (state, action) => {
        state.userData = action.payload;
      })
      .addCase(signUp.pending, (state) => {
        state.isSigningUp = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isSigningUp = false;
        if (action.payload?.user) state.userData = action.payload.user;
      })
      .addCase(signUp.rejected, (state) => {
        state.isSigningUp = false;
      });
  },
});

export const { updateUserData, clearUserData } = authSlice.actions;
export default authSlice.reducer;
