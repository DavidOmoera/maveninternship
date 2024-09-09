import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import { handleApiError } from "../utils/helpers";
import {
  TGetCommitteesResponse,
  TGetCommitteeResponse,
  TGetCommitteeMembershipsResponse,
  TGetCommitteesRequestParams,
} from "types/common";

// Fetch committees
export const getCommitteesRequest = (
  params?: TGetCommitteesRequestParams
): Promise<AxiosResponse<TGetCommitteesResponse>> => {
  return client.get(endpoints.committees.getCommittees(), { params });
};

// Fetch a single committee by ID
export const getCommitteeRequest = (
  committeeId: string
): Promise<AxiosResponse<TGetCommitteeResponse>> => {
  return client
    .get<TGetCommitteeResponse>(endpoints.committees.getCommittee(committeeId))
    .catch(handleApiError);
};

// Fetch committee memberships
export const getCommitteeMembershipsRequest = (
  committeeId: string
): Promise<AxiosResponse<TGetCommitteeMembershipsResponse>> => {
  return client
    .get<TGetCommitteeMembershipsResponse>(
      endpoints.committees.getCommitteeMemberships(committeeId)
    )
    .catch(handleApiError);
};
