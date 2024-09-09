import { createSlice } from "@reduxjs/toolkit";
import {
  createNotification,
  getNotifications,
  updateNotificationStatus,
  createNotificationSettings,
  updateNotificationSettings,
} from "./thunks";
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
  extraReducers: (builder) => {
    builder
      .addCase(createNotification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNotification.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications.push(action.payload);
      })
      .addCase(createNotification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to create notification";
      })

      .addCase(getNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload;
      })
      .addCase(getNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to get notifications";
      })

      .addCase(updateNotificationStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateNotificationStatus.fulfilled, (state, action) => {
        state.loading = false;
        const notificationId = Number(action.meta.arg);
        state.notifications = state.notifications.map((notification) =>
          notification.id === notificationId
            ? { ...notification, status: action.payload.status }
            : notification
        );
      })

      .addCase(updateNotificationStatus.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Failed to update notification status";
      })

      .addCase(createNotificationSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNotificationSettings.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createNotificationSettings.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Failed to create notification settings";
      })

      .addCase(updateNotificationSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateNotificationSettings.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateNotificationSettings.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Failed to update notification settings";
      });
  },
});

export const { clearNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;
