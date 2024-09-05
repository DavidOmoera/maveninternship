import { createAsyncThunk } from "@reduxjs/toolkit";
import { notificationsApi } from "api";
import { AxiosError } from "axios";

export const createNotification = createAsyncThunk(
  "notifications/createNotification",
  async () => {
    try {
      const response = await notificationsApi.createNotificationRequest();
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const getNotifications = createAsyncThunk(
  "notifications/getNotifications",
  async (user_id: string) => {
    try {
      const response = await notificationsApi.getNotificationsRequest(user_id);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const updateNotificationStatus = createAsyncThunk(
  "notifications/updateNotificationStatus",
  async (notification_id: string) => {
    try {
      const response = await notificationsApi.updateNotificationStatusRequest(
        notification_id
      );
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const createNotificationSettings = createAsyncThunk(
  "notifications/createNotificationSettings",
  async () => {
    try {
      const response = await notificationsApi.createNotificationStatusRequest();
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const updateNotificationSettings = createAsyncThunk(
  "notifications/updateNotificationSettings",
  async (user_id: string) => {
    try {
      const response = await notificationsApi.updateNotificationSettingsRequest(
        user_id
      );
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);
