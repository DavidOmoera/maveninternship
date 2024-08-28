import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth";
import organizationSlice from "./organization";
import topRepsSlice from "./topRepsSlice";
import watchedBillsReducer from "store/slices/watchedBillsSlice.ts";
import activitySlice from "./activity";

export const rootReducer = combineReducers({
  auth: authSlice,
  activity: activitySlice,
  organization: organizationSlice,
  topReps: topRepsSlice,
  watchedBills: watchedBillsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
