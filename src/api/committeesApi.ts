import { AxiosResponse, AxiosError } from "axios";
import { client } from './client';
import { endpoints } from './endpoints';
import { handleError } from '../utils/helpers';
import {
  TGetCommitteesResponse,
  TGetCommitteeResponse,
  TGetCommitteeMembershipsResponse
} from "types/common";

// Fetch committees 
export const getCommitteesRequest = async (
  jurisdiction?: string,
  skip: number = 0,
  limit: number = 10
): Promise<AxiosResponse<TGetCommitteesResponse>> => {
  try {
    const response = await client.get(endpoints.committees.getCommittees(jurisdiction, skip, limit));
    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      handleError(error, "Failed to fetch committees.");
    } else {
      handleError(error as AxiosError, "Failed to fetch committees.");
    }
    throw error;
  }
};

// Fetch a single committee by ID 
export const getCommitteeRequest = async (
  committeeId: string
): Promise<AxiosResponse<TGetCommitteeResponse>> => {
  try {
    const response = await client.get(endpoints.committees.getCommittee(committeeId));
    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      handleError(error, "Failed to fetch the committee.");
    } else {
      handleError(error as AxiosError, "Failed to fetch the committee.");
    }
    throw error;
  }
};

// Fetch committee memberships 
export const getCommitteeMembershipsRequest = async (
  committeeId: string
): Promise<AxiosResponse<TGetCommitteeMembershipsResponse>> => {
  try {
    const response = await client.get(endpoints.committees.getCommitteeMemberships(committeeId));
    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      handleError(error, "Failed to fetch committee memberships.");
    } else {
      handleError(error as AxiosError, "Failed to fetch committee memberships.");
    }
    throw error;
  }
};
