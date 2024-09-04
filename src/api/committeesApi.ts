import { client } from './client';
import { endpoints } from './endpoints';
import { handleError } from '../utils/helpers';


export const getCommittees = async (jurisdiction?: string, skip: number = 0, limit: number = 10) => {
  try {
    const response = await client.get(endpoints.committees.getCommittees(jurisdiction, skip, limit));
    return response.data;
  } catch (error: any) {
    handleError(error, "Failed to fetch committees.");
    throw error;
  }
};

export const getCommittee = async (committeeId: string) => {
  try {
    const response = await client.get(endpoints.committees.getCommittee(committeeId));
    return response.data;
  } catch (error: any) {
    handleError(error, "Failed to fetch the committee.");
    throw error;
  }
};

export const getCommitteeMemberships = async (committeeId: string) => {
  try {
    const response = await client.get(endpoints.committees.getCommitteeMemberships(committeeId));
    return response.data;
  } catch (error: any) {
    handleError(error, "Failed to fetch committee memberships.");
    throw error;
  }
};
export function getCommitteesRequest(): any {
  throw new Error("Function not implemented.");
}

export function getCommitteeMembershipsRequest(): any {
  throw new Error("Function not implemented.");
}

