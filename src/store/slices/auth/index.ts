import { createSlice } from "@reduxjs/toolkit";
import { TAuthState } from "./types";
import { getOrganization, getUserData, signUp } from "./thunks";

const initialState: TAuthState = {
  accessToken: "",
  userData: undefined,
  userDataError: undefined,
  userDataLoading: false,
  isSigningUp: false,
  organizationData: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    updateUserData: (state, action) => {
      state.userData = { ...state.userData, ...action.payload };
    },
    updateOrganizationData: (state, action) => {
      state.organizationData = action.payload;
    },
    clearUserData: () => ({ ...initialState }),
  },
  extraReducers: (builder) => {
    builder
      //get user data
      .addCase(getUserData.fulfilled, (state, action) => {
        if (action.payload) {
          const user = action.payload;
          state.userData = { ...state.userData, ...user };
          localStorage.setItem("userData", JSON.stringify(user));
        }
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.userDataError = action.error.message;
      })

      //sign up
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
    //get organization details
    builder
      .addCase(getOrganization.fulfilled, (state, action) => {
        state.organizationData = action.payload;
      })
      .addCase(getOrganization.rejected, (state, action) => {
        state.userDataError = action.error.message;
      });
  },
});

export const { updateUserData, clearUserData, updateOrganizationData } =
  authSlice.actions;
export default authSlice.reducer;
