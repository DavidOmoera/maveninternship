import { RootState } from "types/common";

export const selectUserData = (state: RootState) => state.user.userData;
export const selectIsUserLoading = (state: RootState) =>
  state.user.userDataLoading;
export const selectUserDataError = (state: RootState) =>
  state.user.userDataError;
