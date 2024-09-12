import { createSlice } from "@reduxjs/toolkit";
import { getUserData, updateUser } from "../auth/thunks";

import { TAuthState } from "../auth/types";

const initialState: TAuthState = {
  userData: undefined,
  userDataError: undefined,
  userDataLoading: false,
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
        state.userDataLoading = false;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.userDataLoading = false;
        state.userDataError =
          action.error.message || "Failed to fetch user data";
      });

    builder
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
      });
  },
});

export const { updateUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
