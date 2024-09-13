import { createSlice } from "@reduxjs/toolkit";
import { TAuthState } from "./types";
import { signUp } from "./thunks";

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
    clearUserData: () => ({ ...initialState }),
  },
  extraReducers: (builder) => {
    builder
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

export const { clearUserData } = authSlice.actions;
export default authSlice.reducer;
