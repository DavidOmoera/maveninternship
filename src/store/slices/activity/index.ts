import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActivityState } from "types/common";
import { getActivityLogs, searchActivityLogs } from "./thunks";
import { TActivityLogs } from "types/common";

const initialState: ActivityState = {
  activities: [],
  searchResults: [],
  loading: false,
  error: null,
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
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getActivityLogs.fulfilled, (state, action) => {
      state.loading = false;
      state.activities = action.payload;
      state.error = null;
    });
    builder
      .addCase(getActivityLogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(searchActivityLogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchActivityLogs.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(searchActivityLogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export const { setActivity, clearActivity } = activitySlice.actions;
export default activitySlice.reducer;
