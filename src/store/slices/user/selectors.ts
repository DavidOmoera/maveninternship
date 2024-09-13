import { RootState } from "types/common";

export const selectUserData = (state: RootState) => state.user.userData;
export const selectIsUserLoading = (state: RootState) =>
  state.user.userDataLoading;
export const selectUserDataError = (state: RootState) =>
  state.user.userDataError;
export const selectChangePassword = (state: RootState) =>
  state.user.changePassword;
export const selectChangePasswordPending = (state: RootState) =>
  state.user.changePassword;
export const selectChangePasswordError = (state: RootState) =>
  state.user.changePassword;
