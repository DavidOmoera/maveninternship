import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import { TNotifications, TNotificationsSettings } from "types/common";

export const createNotificationRequest = (): Promise<
  AxiosResponse<TNotifications>
> => client.post(endpoints.notifications.createNotification());

export const getNotificationsRequest = (
  user_id: number
): Promise<AxiosResponse<TNotifications[]>> =>
  client.get(endpoints.notifications.getNotifications(user_id));

export const updateNotificationStatusRequest = (
  notification_id: number
): Promise<AxiosResponse<TNotifications>> =>
  client.put(endpoints.notifications.updateNotificationStatus(notification_id));

export const createNotificationSettingsRequest = (): Promise<
  AxiosResponse<TNotificationsSettings>
> => client.post(endpoints.notifications.createNotificationSettings());

export const updateNotificationSettingsRequest = (
  user_id: number
): Promise<AxiosResponse<TNotificationsSettings>> =>
  client.put(endpoints.notifications.updateNotificationSettings(user_id));
