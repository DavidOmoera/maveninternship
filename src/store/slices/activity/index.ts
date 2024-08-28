import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TActivityState } from "./types";
import { getActivityLogs } from "./thunks";

const initialState: TActivityState = {
  activities: [],
  activitiesLoading: false,
  activitiesError: undefined,
};

const activitySlice = createSlice({
  name: "activity",
  initialState: initialState,
  reducers: {
    setActivity: (
      state,
      action: PayloadAction<TActivityState["activities"]>
    ) => {
      state.activities = action.payload;
    },
    clearActivity: () => ({ ...initialState }),
  },
  extraReducers: (builder) => {
    builder.addCase(getActivityLogs.pending, (state) => {
      state.activitiesLoading = true;
      state.activitiesError = undefined;
    });
    builder.addCase(getActivityLogs.fulfilled, (state, action) => {
      state.activitiesLoading = false;
      state.activities = action.payload;
    });
    builder.addCase(getActivityLogs.rejected, (state, action) => {
      state.activitiesLoading = false;
      state.activitiesError = action.error.message;
    });
  },
});

export const { setActivity, clearActivity } = activitySlice.actions;
export default activitySlice.reducer;
