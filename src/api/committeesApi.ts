import { client } from './client'; 
import { endpoints } from './endpoints';

export const getCommittees = async (jurisdiction?: string, skip: number = 0, limit: number = 10) => {
  try {
    const response = await client.get(endpoints.committees.getCommittees(jurisdiction, skip, limit));
    return response.data;
  } catch (error) {
    // Handle errors as needed
    throw error;
  }
};

export const getCommittee = async (committeeId: string) => {
  try {
    const response = await client.get(endpoints.committees.getCommittee(committeeId));
    return response.data;
  } catch (error) {
    // Handle errors as needed
    throw error;
  }
};

export const getCommitteeMemberships = async (committeeId: string) => {
  try {
    const response = await client.get(endpoints.committees.getCommitteeMemberships(committeeId));
    return response.data;
  } catch (error) {
    // Handle errors as needed
    throw error;
  }
};
