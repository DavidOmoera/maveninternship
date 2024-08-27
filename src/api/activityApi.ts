import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import {
  TPostActivityLogs,
  TGetActivityLogsParams,
  TGetActivityLogs,
} from "types/common";

export const postActivityLogRequest = (): Promise<
  AxiosResponse<TPostActivityLogs>
> => client.get(endpoints.activity.postActivity());

export const getActivityLogRequest = (
  params: TGetActivityLogsParams
): Promise<AxiosResponse<TGetActivityLogs>> =>
  client.get(endpoints.activity.getActivity(), { params });
