import { RootState } from "types/common";

export const getActivitySelector = (state: RootState) =>
  state.activity.activities;
