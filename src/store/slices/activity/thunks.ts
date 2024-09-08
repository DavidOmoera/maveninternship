import { createAsyncThunk } from "@reduxjs/toolkit";
import { activityApi } from "api";
import { AxiosError } from "axios";
import { TActivityLogs, TActivityParams } from "types/common";

export const getActivityLogs = createAsyncThunk<
  TActivityLogs[],
  { user_id: number } & TActivityParams
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

export const searchActivityLogs = createAsyncThunk(
  "activity/searchActivity",
  async (params: TActivityParams) => {
    try {
      const response = await activityApi.searchActivityLogRequest(params);
      return response.data as TActivityLogs[];
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);
