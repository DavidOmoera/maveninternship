import { RootState } from "types/common";

export const getActivitySelector = (state: RootState) =>
  state.activity.activities;
export const searchActivitySelector = (state: RootState) =>
  state.activity.searchResults;
export const activityLoading = (state: RootState) => state.activity.loading;
export const searchLoading = (state: RootState) => state.activity.loading;
export const activityError = (state: RootState) => state.activity.error;
export const searchError = (state: RootState) => state.activity.error;
export const getUserIdSelector = (state: RootState) => state.auth.userData?.id;
