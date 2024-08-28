import { createAsyncThunk } from "@reduxjs/toolkit";
import { activityApi } from "api";
import { AxiosError } from "axios";
import { TGetActivityLogsParams, TGetBillsParams } from "types/common";

export const getActivityLogs = createAsyncThunk(
  "activity/getActivity",
  async (requestBody: TGetActivityLogsParams & TGetBillsParams) => {
    try {
      const response = await activityApi.getActivityLogRequest(requestBody);

      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);
