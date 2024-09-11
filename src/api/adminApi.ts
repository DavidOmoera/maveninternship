import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import {
  TUserData,
  TUserParams,
  TUpdateUserParams,
  TActivityParams,
  TSearchUsersParams,
  TOrganizationParams,
  TUpdateOrgParams,
  TRoleParams,
} from "types/common";

export const makeAdminRequest = (
  params: TUserParams
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.admin.makeAdmin(), { params });

export const getAllUsersRequest = (
  params: TActivityParams
): Promise<AxiosResponse<TUserData[]>> =>
  client.post(endpoints.admin.getAllUsers(), { params });

export const getAllOrganizationsRequest = (
  params: TActivityParams
): Promise<AxiosResponse<TUserData[]>> =>
  client.post(endpoints.admin.getAllOrganizations(), { params });

export const searchUsersRequest = (
  params: TSearchUsersParams
): Promise<AxiosResponse<TUserData[]>> =>
  client.get(endpoints.admin.searchUsers(), { params });

export const searchOrganizationsRequest = (
  params: TSearchUsersParams
): Promise<AxiosResponse<TUserData[]>> =>
  client.get(endpoints.admin.searchOrganization(), { params });

export const deleteUserRequest = (
  params: TUserParams
): Promise<AxiosResponse<string>> =>
  client.delete(endpoints.admin.deleteUser(), { params });

export const deleteOrganizationRequest = (
  params: TOrganizationParams
): Promise<AxiosResponse<string>> =>
  client.delete(endpoints.admin.deleteOrganization(), { params });

export const suspendUserRequest = (
  params: TUserParams
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.admin.suspendUser(), { params });

export const suspendOrganizationRequest = (
  params: TOrganizationParams
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.admin.suspendOrganization(), { params });

export const unSuspendUserRequest = (
  params: TUserParams
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.admin.unsuspendUser(), { params });

export const unsuspendOrganizationRequest = (
  params: TOrganizationParams
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.admin.unsuspendOrganization(), { params });

export const updateUserRoleRequest = (
  params: TRoleParams
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.admin.updateUserRole(), { params });

export const updateUserDetailsRequest = (
  params: TUpdateUserParams
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.admin.updateUserDetails(), { params });

export const updateOrganizationRequest = (
  params: TUpdateOrgParams
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.admin.deleteUser(), { params });

export const banEmailRequest = (
  email: string
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.admin.banEmail(), { params: { email } });

export const deleteBannedEmailRequest = (
  email: string
): Promise<AxiosResponse<string>> =>
  client.delete(endpoints.admin.deleteBannedEmail(), { params: { email } });
