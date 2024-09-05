import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActivityState } from "types/common";
import { getActivityLogs } from "./thunks";
import { TActivityLogs } from "types/common";

const initialState: ActivityState = {
  activities: [],
  activitiesLoading: false,
  activitiesError: null,
};

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    setActivity: (state, action: PayloadAction<TActivityLogs[]>) => {
      state.activities = action.payload;
    },
    clearActivity: () => ({ ...initialState }),
  },
  extraReducers: (builder) => {
    builder.addCase(getActivityLogs.pending, (state) => {
      state.activitiesLoading = true;
      state.activitiesError = null;
    });
    builder.addCase(getActivityLogs.fulfilled, (state, action) => {
      state.activitiesLoading = false;
      state.activities = action.payload;
      state.activitiesError = null;
    });
    builder.addCase(getActivityLogs.rejected, (state, action) => {
      state.activitiesLoading = false;
      state.activitiesError = action.error.message;
    });
  },
});

export const { setActivity, clearActivity } = activitySlice.actions;
export default activitySlice.reducer;
