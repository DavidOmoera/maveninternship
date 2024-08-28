import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import {
  TUserData,
  TUserParams,
  TGetBillsParams,
  TSearchUsersParams,
  TOrganizationParams,
  TRoleParams,
  TUserDetailsParams,
} from "types/common";

export const MakeAdminRequest = (
  params: TUserParams
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.admin.makeAdmin(), { params });

export const GetAllUsersRequest = (
  params: TGetBillsParams
): Promise<AxiosResponse<TUserData>> =>
  client.post(endpoints.admin.getAllUsers(), { params });

export const GetAllOrganizationsRequest = (
  params: TGetBillsParams
): Promise<AxiosResponse<TUserData>> =>
  client.post(endpoints.admin.getAllOrganizations(), { params });

export const SearchUsersRequest = (
  params: TSearchUsersParams
): Promise<AxiosResponse<TUserData>> =>
  client.get(endpoints.admin.searchUsers(), { params });

export const SearchOrganizationsRequest = (
  params: TSearchUsersParams
): Promise<AxiosResponse<TUserData>> =>
  client.get(endpoints.admin.searchOrganization(), { params });

export const DeleteUserRequest = (
  params: TUserParams
): Promise<AxiosResponse<string>> =>
  client.delete(endpoints.admin.deleteUser(), { params });

export const DeleteOrganizationRequest = (
  params: TOrganizationParams
): Promise<AxiosResponse<string>> =>
  client.delete(endpoints.admin.deleteOrganization(), { params });

export const SuspendUserRequest = (
  params: TUserParams
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.admin.suspendUser(), { params });

export const suspendOrganizationRequest = (
  params: TOrganizationParams
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.admin.suspendOrganization(), { params });

export const UnSuspendUserRequest = (
  params: TUserParams
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.admin.unsuspendUser(), { params });

export const UnsuspendOrganizationRequest = (
  params: TOrganizationParams
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.admin.unsuspendOrganization(), { params });

export const UpdateUserRoleRequest = (
  params: TUserParams & TRoleParams
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.admin.updateUserRole(), { params });

export const UpdateUserDetailsRequest = (
  params: TUserDetailsParams & TUserParams
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.admin.updateUserDetails(), { params });

export const UpdateOrganizationRequest = (
  params: TUserDetailsParams & TOrganizationParams
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.admin.deleteUser(), { params });

export const BanEmailRequest = (
  email: string
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.admin.banEmail(), { params: { email } });

export const DeleteBannedEmailRequest = (
  email: string
): Promise<AxiosResponse<string>> =>
  client.delete(endpoints.admin.deleteBannedEmail(), { params: { email } });
