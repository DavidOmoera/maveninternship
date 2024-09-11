import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import {
    TPersonResponse,
    TPersonOfficesResponse,
    TPersonMembershipsResponse,
} from "types/common";

// Get Person Details
export const getPersonRequest = (personId: string): Promise<AxiosResponse<TPersonResponse>> =>
    client.get(endpoints.person.getPerson(personId));

// Get Person Offices
export const getPersonOfficesRequest = (personId: string): Promise<AxiosResponse<TPersonOfficesResponse>> =>
    client.get(endpoints.person.getPersonOffices(personId));

// Get Person Memberships
export const getPersonMembershipsRequest = (personId: string): Promise<AxiosResponse<TPersonMembershipsResponse>> =>
    client.get(endpoints.person.getPersonMemberships(personId));

// Search Person by Name
export const searchPersonRequest = (name: string): Promise<AxiosResponse<TPersonResponse[]>> =>
    client.get(endpoints.person.searchPerson(), {
        params: { name },
    });
