import { createAsyncThunk } from "@reduxjs/toolkit";
import { activityApi } from "api";
import { AxiosError } from "axios";
import { TGetBillsParams } from "types/common";

export const getActivityLogs = createAsyncThunk(
  "activity/getActivity",
  async (requestBody: { user_id: number } & TGetBillsParams) => {
    try {
      const { user_id, ...params } = requestBody;
      const response = await activityApi.getActivityLogRequest(user_id, params);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);
