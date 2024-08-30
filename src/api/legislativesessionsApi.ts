import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";

// Define the types for the legislative sessions request parameters and response
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

// Existing function to fetch legislative sessions
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
          case 404:
            console.error("404 Not Found: The requested resource could not be found.");
            break;
          case 422:
            console.error("422 Validation Error:", error.response.data.detail);
            break;
          case 500:
            console.error("500 Internal Server Error: The server encountered an error.");
            break;
          default:
            console.error("An unexpected error occurred:", error.response.status, error.response.data);
        }
      } else if (error.request) {
        console.error("No response was received from the server:", error.request);
      } else {
        console.error("Error in setting up the request:", error.message);
      }
      return Promise.reject(error); // Reject the promise with the error object
    });
};

// Define the types for the jurisdictions response
interface TJurisdiction {
  name: string;                     // Name of the jurisdiction
  classification: string;           // Classification type
  created_at: string;               // Creation date
  updated_at: string;               // Last updated date
  extras: Record<string, string>;   // Extra properties
  url: string;                      // URL of the jurisdiction
  division_id: string;              // Division ID
  latest_bill_update: string;       // Latest bill update timestamp
  latest_people_update: string;     // Latest people update timestamp
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
        skip: params.skip ?? 0,    // Uses default 0 if skip is not provided
        limit: params.limit ?? 10, // Uses default 10 if limit is not provided
      },
    })
    .catch((error) => {
      // Handle specific status codes or log the error
      if (error.response) {
        switch (error.response.status) {
          case 403:
            console.error("403 Forbidden: Access is denied. Please check your API credentials or permissions.");
            break;
          case 404:
            console.error("404 Not Found: The requested resource could not be found.");
            break;
          case 422:
            console.error("422 Validation Error:", error.response.data.detail);
            break;
          case 500:
            console.error("500 Internal Server Error: The server encountered an error.");
            break;
          default:
            console.error("An unexpected error occurred:", error.response.status, error.response.data);
        }
      } else if (error.request) {
        console.error("No response was received from the server:", error.request);
      } else {
        console.error("Error in setting up the request:", error.message);
      }
      return Promise.reject(error); // Reject the promise with the error object
    });
};
