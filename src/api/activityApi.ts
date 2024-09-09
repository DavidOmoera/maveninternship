import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import { TActivityLog, TActivityParams } from "types/common";

export const createActivityLogRequest = (): Promise<AxiosResponse<void>> =>
  client.post(endpoints.activity.createActivity());

export const getActivityLogRequest = (
  user_id: number,
  params: TActivityParams
): Promise<AxiosResponse<TActivityLog[]>> =>
  client.get(endpoints.activity.getActivityLogs(user_id), { params });

export const searchActivityLogRequest = (
  params: TActivityParams
): Promise<AxiosResponse<TActivityLog[]>> =>
  client.get(endpoints.activity.searchActivity(), { params });
