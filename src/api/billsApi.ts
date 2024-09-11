import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import {
  TBill,
  TBillChatRequestParams,
  TBillSummaryParams,
  TBillSummaryResponse,
  TBillVersion,
  TBillVotesParams,
  TBillVotesResponse,
  TGetBillChatResponse,
  TGetBillsParams,
  TGetBillsResponse,
  TGetBillsSearchResponse,
  TGetTrackedBillsRequestParams,
  TPostBillChatRequestBody,
  TPostBillChatResponse,
  TSearchBillsParams,
  TTrackBillResponse,
} from "types/common";

export const getBillRequest = (billId: string): Promise<AxiosResponse<TBill>> =>
  client.get(endpoints.bills.getBill(billId));

export const getBillVotesRequest = ({
  bill_id,
  limit,
}: TBillVotesParams): Promise<AxiosResponse<TBillVotesResponse>> =>
  client.get(endpoints.bills.getBillVotes(bill_id), { params: { limit } });

export const getBillSummaryRequest = ({
  bill_id,
  version,
  state,
}: TBillSummaryParams): Promise<AxiosResponse<TBillSummaryResponse>> =>
  client.get(endpoints.bills.getBillSummary(bill_id), {
    params: { version, state },
  });

export const getBillVersionsRequest = (
  bill_id: string
): Promise<AxiosResponse<TBillVersion[]>> =>
  client.get(endpoints.bills.getBillVersions(bill_id));

export const getBillsRequest = (
  params?: TGetBillsParams
): Promise<AxiosResponse<TGetBillsResponse>> =>
  client.get(endpoints.bills.getBills(), { params });

export const searchBillsRequest = (
  params: TSearchBillsParams
): Promise<AxiosResponse<TGetBillsSearchResponse>> =>
  client.get(endpoints.bills.searchBills(), { params });

export const postBillChatRequest = (
  requestBody: TPostBillChatRequestBody
): Promise<AxiosResponse<TPostBillChatResponse>> =>
  client.post(endpoints.bills.chatAboutBill(), null, { params: requestBody });

export const getBillChatRequest = (
  params: TBillChatRequestParams
): Promise<AxiosResponse<TGetBillChatResponse>> =>
  client.get(endpoints.bills.getBillChat(), { params });

export const trackBillRequest = (
  bill_id: string
): Promise<AxiosResponse<TTrackBillResponse>> =>
  client.post(endpoints.bills.trackBill(), null, { params: { bill_id } });

export const untrackBillRequest = (
  bill_id: string
): Promise<AxiosResponse<TTrackBillResponse>> =>
  client.delete(endpoints.bills.stopTrackingBill(), { params: { bill_id } });

export const getTrackedBillsRequest = (
  params?: TGetTrackedBillsRequestParams
): Promise<AxiosResponse<TGetBillsSearchResponse>> =>
  client.get(endpoints.bills.getTrackedBills(), { params });
