import { RootState } from "types/common";

export const getActivitySelector = (state: RootState) =>
  state.activity.activities;
export const activityLoading = (state: RootState) =>
  state.activity.activitiesLoading;
export const activityError = (state: RootState) =>
  state.activity.activitiesError;

