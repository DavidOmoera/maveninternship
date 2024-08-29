// legislativesessionsApi.ts

import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";

// Define the types for the request parameters and response
interface TLegislativeSessionsParams {
  jurisdiction: string;  // Required parameter
  skip?: number;         // Optional parameter with default
  limit?: number;        // Optional parameter with default
}

interface TLegislativeSession {
  identifier: string;    // Unique identifier of the session
  name: string;          // Name of the session
  classification: string; // Classification type
  start_date: string;    // Start date of the session
  end_date: string;      // End date of the session
  active: boolean;       // Whether the session is currently active
  id: string;            // Unique ID of the session
}

// Define the response type as an array of legislative sessions
export type TGetLegislativeSessionsResponse = TLegislativeSession[];

/**
 * Fetches legislative sessions based on jurisdiction and optional pagination parameters.
 * @param params Object containing query parameters such as jurisdiction, skip, and limit.
 * @returns Promise resolving to the legislative sessions data.
 */
export const getLegislativeSessionsRequest = (
  params: TLegislativeSessionsParams
): Promise<AxiosResponse<TGetLegislativeSessionsResponse>> => {
  return client
    .get<TGetLegislativeSessionsResponse>(endpoints.legislativesessions.getSessions(), {
      params: {
        jurisdiction: params.jurisdiction, // Passes the required jurisdiction
        skip: params.skip ?? 0,            // Uses default 0 if skip is not provided
        limit: params.limit ?? 10,         // Uses default 10 if limit is not provided
      },
    })
    .catch((error) => {
      // Handle specific status codes or log the error
      if (error.response) {
        switch (error.response.status) {
          case 403:
            console.error("403 Forbidden: Access is denied. Please check your API credentials or permissions.");
            break;
          case 422:
            console.error("422 Validation Error:", error.response.data.detail);
            break;
          default:
            console.error("An unexpected error occurred:", error);
        }
      } else {
        console.error("Network error or server is down:", error.message || error);
      }
      return Promise.reject(error); // Reject the promise with the error object
    });
};
