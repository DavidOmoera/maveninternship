// src/utils/api.ts

import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import { handleApiError } from "utils/helpers";

// Import types from the types file
import {
  TLegislativeSessionsParams,
  TGetLegislativeSessionsResponse,
  TGetJurisdictionsResponse
} from "types/common.ts"; 

// Existing function to fetch legislative sessions
export const getLegislativeSessionsRequest = (
  params: TLegislativeSessionsParams
): Promise<AxiosResponse<TGetLegislativeSessionsResponse>> => {
  return client
    .get<TGetLegislativeSessionsResponse>(endpoints.legislativeSessions.getSessions(), {
      params: {
        jurisdiction: params.jurisdiction,
        skip: params.skip ?? 0,
        limit: params.limit ?? 10,
      },
    })
    .catch(handleApiError);
};

/**
 * Fetches jurisdictions with optional pagination parameters.
 * 
 * @param {Object} params - Object containing query parameters such as skip and limit.
 * @returns {Promise<AxiosResponse<TGetJurisdictionsResponse>>} Promise resolving to the jurisdictions data.
 */
export const getJurisdictionsRequest = (
  params: { skip?: number; limit?: number }
): Promise<AxiosResponse<TGetJurisdictionsResponse>> => {
  return client
    .get<TGetJurisdictionsResponse>(endpoints.jurisdictions.getAll(), {
      params: {
        skip: params.skip ?? 0,
        limit: params.limit ?? 10,
      },
    })
    .catch(handleApiError);
};
