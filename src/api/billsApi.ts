import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import {
  TBill,
  TBillSummaryParams,
  TBillSummaryResponse,
  TBillVotesParams,
  TBillVotesResponse,
  TGetBillsParams,
  TGetBillsResponse,
  TSearchBillsParams,
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

export const getBillsRequest = (
  params?: TGetBillsParams
): Promise<AxiosResponse<TGetBillsResponse>> =>
  client.get(endpoints.bills.getBills(), { params });

export const searchBillsRequest = (
  params: TSearchBillsParams
): Promise<AxiosResponse<TGetBillsResponse>> =>
  client.get(endpoints.bills.searchBills(), { params });
