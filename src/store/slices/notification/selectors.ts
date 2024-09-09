import { RootState } from "types/common";

export const getNotificationsSelector = (state: RootState) =>
  state.notification.notifications;

export const getNotificationsLoadingSelector = (state: RootState) =>
  state.notification.loading;

export const getNotificationsErrorSelector = (state: RootState) =>
  state.notification.error;
