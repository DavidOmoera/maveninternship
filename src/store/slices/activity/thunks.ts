import { createAsyncThunk } from "@reduxjs/toolkit";
import { activityApi } from "api";
import { AxiosError } from "axios";
import { TActivityLogs, TGetBillsParams } from "types/common";

export const getActivityLogs = createAsyncThunk<
  TActivityLogs[],
  { user_id: number } & TGetBillsParams
>("activity/getActivity", async (requestBody) => {
  try {
    const { user_id, ...params } = requestBody;
    const response = await activityApi.getActivityLogRequest(user_id, params);
    return response.data as TActivityLogs[];
  } catch (e) {
    const error = e as AxiosError;
    throw error;
  }
});
