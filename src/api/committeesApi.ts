import { AxiosResponse } from "axios";
import { client } from './client';
import { endpoints } from './endpoints';
import { handleApiError } from '../utils/helpers'; 
import {
  TGetCommitteesResponse,
  TGetCommitteeResponse,
  TGetCommitteeMembershipsResponse
} from "types/common";

// Fetch committees
export const getCommitteesRequest = (
  jurisdiction?: string,
  skip: number = 0,
  limit: number = 10
): Promise<AxiosResponse<TGetCommitteesResponse>> => {
  return client
    .get<TGetCommitteesResponse>(endpoints.committees.getCommittees(jurisdiction, skip, limit))
    .catch(handleApiError);  
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
    .get<TGetCommitteeMembershipsResponse>(endpoints.committees.getCommitteeMemberships(committeeId))
    .catch(handleApiError);  
};
