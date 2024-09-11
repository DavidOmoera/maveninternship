import { createAsyncThunk } from "@reduxjs/toolkit";
import { billsApi } from "api";
import { AxiosError } from "axios";
import { TGetBillsParams, TGetTrackedBillsRequestParams } from "types/common";

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

export const getTrackedBills = createAsyncThunk(
  "bill/getTrackedBills",
  async (params?: TGetTrackedBillsRequestParams) => {
    try {
      const response = await billsApi.getTrackedBillsRequest(params);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const trackBill = createAsyncThunk(
  "bill/trackBill",
  async (bill_id: string, { dispatch }) => {
    try {
      const response = await billsApi.trackBillRequest(bill_id);
      dispatch(getTrackedBills());
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const untrackBill = createAsyncThunk(
  "bill/untrackBill",
  async (bill_id: string, { dispatch }) => {
    try {
      const response = await billsApi.untrackBillRequest(bill_id);
      dispatch(getTrackedBills());

      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);
