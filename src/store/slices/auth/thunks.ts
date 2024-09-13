import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi, profileApi } from "api";
import { AxiosError } from "axios";
import { AuthToastMessages } from "constants/toastMessages";
import {
  BrowserStorageKeys,
  TLoginRequestBody,
  TSignUpRequestBody,
  TUpdateUserRequestBody,
  TVerifyEmailRequestBody,
  TSendReceiptParams,
  TUpdateOrganizationRequestBody,
  TPasswordRequestBody,
} from "types/common";
import BrowserStorageService from "utils/browserStorage";
import { handleError, showSuccessToast } from "utils/helpers";

export const login = createAsyncThunk(
  "auth/login",
  async ({
    successCallback,
    ...requestBody
  }: { successCallback?: () => void } & TLoginRequestBody) => {
    try {
      const response = await authApi.loginRequest(requestBody);

      const accessToken = response.data.access_token;

      if (accessToken) {
        BrowserStorageService.set(BrowserStorageKeys.AccessToken, accessToken);
        successCallback?.();
      }

      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      handleError(error, AuthToastMessages.LOGIN_FAILURE);
    }
  }
);

export const getUserData = createAsyncThunk("auth/getUserData", async () => {
  try {
    const response = await authApi.getUserDataRequest();
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    throw error;
  }
});

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (requestBody: TUpdateUserRequestBody, { dispatch }) => {
    try {
      const response = await profileApi.updateUserRequest(requestBody);
      dispatch(getUserData());
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (requestBody: TSignUpRequestBody) => {
    try {
      const response = await authApi.signUpRequest(requestBody);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      handleError(error, AuthToastMessages.SIGNUP_FAILURE);
      throw error;
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const response = await authApi.logoutRequest();
    BrowserStorageService.clear({ session: true });
    BrowserStorageService.clear({ session: false });
    const message = response.data?.msg;
    if (message) {
      showSuccessToast(message);
    }
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    handleError(error);
    throw error;
  }
});

export const verifyEmail = createAsyncThunk(
  "auth/verifyEmail",
  async (requestBody: TVerifyEmailRequestBody) => {
    try {
      const response = await authApi.verifyEmailRequest(requestBody);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const resendVerificationEmail = createAsyncThunk(
  "auth/resendVerificationEmail",
  async (email: string) => {
    try {
      const response = await authApi.resendVerificationEmailRequest(email);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const sendReceipt = createAsyncThunk(
  "auth/sendReceipt",
  async (params: TSendReceiptParams) => {
    try {
      const response = await authApi.sendReceiptRequest(params);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const getOrganization = createAsyncThunk(
  "auth/getOrganization",
  async (identifier: string) => {
    try {
      const response = await profileApi.getOrganizationRequest(identifier);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const updateOrganizationDetails = createAsyncThunk(
  "auth/updateOrganizationDetails",
  async ({
    email,
    body,
  }: {
    email: string;
    body: TUpdateOrganizationRequestBody;
  }) => {
    try {
      const response = await profileApi.updateOrganizationDetailsRequest(
        email,
        body
      );
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);

export const changePassword = createAsyncThunk(
  "user/changePassword",
  async (body: TPasswordRequestBody) => {
    try {
      const response = await profileApi.changePasswordRequest(body);
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);
