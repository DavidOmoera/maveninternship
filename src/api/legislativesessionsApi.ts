import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import { handleApiError } from "utils/helpers";

// Define the types for the legislative sessions request parameters and response
type TLegislativeSessionsParams = {
  jurisdiction: string;
  skip?: number;
  limit?: number;
};

type TLegislativeSession = {
  identifier: string;
  name: string;
  classification: string;
  start_date: string;
  end_date: string;
  active: boolean;
  id: string;
};

// Define the response type as an array of legislative sessions
export type TGetLegislativeSessionsResponse = TLegislativeSession[];

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

// Define the types for the jurisdictions response
interface TJurisdiction {
  name: string;
  classification: string;
  created_at: string;
  updated_at: string;
  extras: Record<string, string>;
  url: string;
  division_id: string;
  latest_bill_update: string;
  latest_people_update: string;
}

// Define the response type as an array of jurisdictions
export type TGetJurisdictionsResponse = TJurisdiction[];

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
