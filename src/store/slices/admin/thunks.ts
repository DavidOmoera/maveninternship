import { createAsyncThunk } from "@reduxjs/toolkit";
import { adminApi } from "api";
import { AxiosError } from "axios";
import {
  TUserParams,
  TGetBillsParams,
  TSearchUsersParams,
  TOrganizationParams,
  TRoleParams,
  TUpdateUserParams,
  TUpdateOrgParams,
} from "types/common";

export const makeAdmin = createAsyncThunk(
  "admin/makeAdmin",
  async (params: TUserParams) => {
    try {
      const response = await adminApi.makeAdminRequest(params);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const getAllUsers = createAsyncThunk(
  "admin/getAllUsers",
  async (params: TGetBillsParams) => {
    try {
      const response = await adminApi.getAllUsersRequest(params);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const getAllOrganizations = createAsyncThunk(
  "admin/getAllOrganizations",
  async (params: TGetBillsParams) => {
    try {
      const response = await adminApi.getAllOrganizationsRequest(params);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const searchUsers = createAsyncThunk(
  "admin/searchUsers",
  async (params: TSearchUsersParams) => {
    try {
      const response = await adminApi.searchUsersRequest(params);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const searchOrganizations = createAsyncThunk(
  "admin/searchOrganizations",
  async (params: TSearchUsersParams) => {
    try {
      const response = await adminApi.searchOrganizationsRequest(params);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const deleteUser = createAsyncThunk(
  "admin/deleteUser",
  async (params: TUserParams) => {
    try {
      const response = await adminApi.deleteUserRequest(params);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const deleteOrganization = createAsyncThunk(
  "admin/deleteOrganization",
  async (params: TOrganizationParams) => {
    try {
      const response = await adminApi.deleteOrganizationRequest(params);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const suspendUser = createAsyncThunk(
  "admin/suspendUser",
  async (params: TUserParams) => {
    try {
      const response = await adminApi.suspendUserRequest(params);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const suspendOrganization = createAsyncThunk(
  "admin/suspendOrganization",
  async (params: TOrganizationParams) => {
    try {
      const response = await adminApi.suspendOrganizationRequest(params);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const unSuspendUser = createAsyncThunk(
  "admin/unSuspendUser",
  async (params: TUserParams) => {
    try {
      const response = await adminApi.unSuspendUserRequest(params);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const unsuspendOrganization = createAsyncThunk(
  "admin/unsuspendOrganization",
  async (params: TOrganizationParams) => {
    try {
      const response = await adminApi.unsuspendOrganizationRequest(params);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const updateUserRole = createAsyncThunk(
  "admin/updateUserRole",
  async (params: TRoleParams) => {
    try {
      const response = await adminApi.updateUserRoleRequest(params);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const updateUserDetails = createAsyncThunk(
  "admin/updateUserDetails",
  async (params: TUpdateUserParams) => {
    try {
      const response = await adminApi.updateUserDetailsRequest(params);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const updateOrganization = createAsyncThunk(
  "admin/updateOrganization",
  async (params: TUpdateOrgParams) => {
    try {
      const response = await adminApi.updateOrganizationRequest(params);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const banEmail = createAsyncThunk(
  "admin/banEmail",
  async (email: string) => {
    try {
      const response = await adminApi.banEmailRequest(email);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const deleteBannedEmail = createAsyncThunk(
  "admin/deleteBannedEmail",
  async (email: string) => {
    try {
      const response = await adminApi.deleteBannedEmailRequest(email);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);
