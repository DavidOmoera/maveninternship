import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "api";
import { AxiosError } from "axios";
import { AuthToastMessages } from "constants/toastMessages";
import {
  BrowserStorageKeys,
  TLoginRequestBody,
  TSignUpRequestBody,
  TUpdateUserRequestBody,
} from "types/common";
import BrowserStorageService from "utils/browserStorage";
import { handleError } from "utils/helpers";

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
      const response = await authApi.updateUserRequest(requestBody);
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
