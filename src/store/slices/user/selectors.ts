import { RootState } from "types/common";

export const UserData = (state: RootState) => state.user.userData;
export const IsUserLoading = (state: RootState) => state.user.userDataLoading;
export const UserDataError = (state: RootState) => state.user.userDataError;
export const ChangePassword = (state: RootState) => state.user.changePassword;
export const ChangePasswordPending = (state: RootState) =>
  state.user.changePassword;
export const ChangePasswordError = (state: RootState) =>
  state.user.changePassword;
