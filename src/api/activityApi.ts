import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import { TActivityLogs, TGetBillsParams } from "types/common";

export const postActivityLogRequest = (): Promise<
  AxiosResponse<TActivityLogs>
> => client.post(endpoints.activity.postActivity());

export const getActivityLogRequest = (
  user_id: number,
  params: TGetBillsParams
): Promise<AxiosResponse<TActivityLogs>> =>
  client.get(endpoints.activity.getActivity(user_id), { params });
