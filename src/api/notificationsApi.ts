import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import { TGetBillsResponse, TNotifications } from "types/common";

export const createNotificationRequest = (): Promise<
  AxiosResponse<TNotifications>
> => client.get(endpoints.notifications.createNotification());

export const getNotificationsRequest = (
  user_id: string
): Promise<AxiosResponse<TNotifications>> =>
  client.get(endpoints.notifications.getNotifications(user_id));

export const updateNotificationStatusRequest = (
  notification_id: string
): Promise<AxiosResponse<TGetBillsResponse>> =>
  client.get(endpoints.notifications.updateNotificationStatus(notification_id));

export const createNotificationStatusRequest = (): Promise<
  AxiosResponse<TGetBillsResponse>
> => client.get(endpoints.notifications.createNotificationSettings());

export const updateNotificationSettingsRequest = (
  user_id: string
): Promise<AxiosResponse<TGetBillsResponse>> =>
  client.get(endpoints.notifications.updateNotificationSettings(user_id));
