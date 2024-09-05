import { createSlice } from "@reduxjs/toolkit";
// import {
//   createNotification,
//   getNotifications,
//   updateNotificationStatus,
//   createNotificationSettings,
//   updateNotificationSettings,
// } from "./thunks";
import { NotificationsState } from "types/common";

const initialState: NotificationsState = {
  notifications: [],
  loading: false,
  error: null,
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setActivity: (state, action) => {
      state.notifications = action.payload;
    },
    clearNotifications: () => ({ ...initialState }),
  },
});

export const { clearNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;
