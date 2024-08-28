import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import {
  TActivityLogs,
  TGetActivityLogsParams,
  TGetBillsParams,
  TGetActivityLogs,
} from "types/common";

export const postActivityLogRequest = (): Promise<
  AxiosResponse<TActivityLogs & TGetActivityLogs>
> => client.get(endpoints.activity.postActivity());

export const getActivityLogRequest = (
  params: TGetActivityLogsParams & TGetBillsParams
): Promise<AxiosResponse<TGetActivityLogs>> =>
  client.get(endpoints.activity.getActivity(), { params });
