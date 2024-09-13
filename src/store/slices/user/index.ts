import { createSlice } from "@reduxjs/toolkit";
import { changePassword, getUserData, updateUser } from "../auth/thunks";

import { TAuthState } from "../auth/types";

const initialState: TAuthState = {
  userData: undefined,
  userDataLoading: false,
  userDataError: undefined,
  changePassword: undefined,
  changePasswordLoading: false,
  changePasswordError: undefined,
  updateMessage: "",
};

const userSlice = createSlice({
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
      .addCase(getUserData.pending, (state) => {
        state.userDataLoading = true;
        state.userDataError = undefined;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.userData = action.payload;
        if (action.payload) {
          const user = action.payload;
          state.userData = { ...state.userData, ...user };
          localStorage.setItem("userData", JSON.stringify(user));
        }
        state.userDataLoading = false;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.userDataLoading = false;
        state.userDataError =
          action.error.message || "Failed to fetch user data";
      })
      .addCase(updateUser.pending, (state) => {
        state.userDataLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.userDataLoading = false;
        state.updateMessage = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.userDataError =
          action.error.message || "Failed to update user data";
      })
      .addCase(changePassword.pending, (state) => {
        state.changePasswordLoading = true;
        state.changePasswordError = false;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.changePassword = action.payload;
        state.changePasswordLoading = false;
      })
      .addCase(changePassword.rejected, (state) => {
        state.changePasswordLoading = false;
        state.changePasswordError = true || "Failed to update password";
      });
  },
});

export const { updateUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
