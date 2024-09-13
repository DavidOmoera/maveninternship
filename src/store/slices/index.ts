import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth";
import organizationSlice from "./organization";
import topRepsSlice from "./topRepsSlice";
import billSlice from "./bill";
import activitySlice from "./activity";
import adminSlice from "./admin";
import notificationSlice from "./notification";
import userSlice from "./user";

export const rootReducer = combineReducers({
  auth: authSlice,
  admin: adminSlice,
  activity: activitySlice,
  bill: billSlice,
  organization: organizationSlice,
  topReps: topRepsSlice,
  notification: notificationSlice,
  user: userSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
