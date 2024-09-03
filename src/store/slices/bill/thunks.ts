import { createAsyncThunk } from "@reduxjs/toolkit";
import { billsApi } from "api";
import { AxiosError } from "axios";
import { TGetBillsParams } from "types/common";

export const getBills = createAsyncThunk(
  "bill/getBills",
  async (params?: TGetBillsParams) => {
    try {
      const response = await billsApi.getBillsRequest(params);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);
