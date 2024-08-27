import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import {
  TActivityLogs,
  TActivityLogsResponse,
  TActivityLogsResponseParams,
} from "types/common";

export const createActivityRequest = (
  billId: string
): Promise<AxiosResponse<TActivityLogs>> =>
  client.get(endpoints.activity.getActivity(billId));

export const getActivityLog = (
  params: TActivityLogsResponseParams
): Promise<AxiosResponse<TActivityLogsResponse>> =>
  client.get(endpoints.activity.postActivity(), { params });
