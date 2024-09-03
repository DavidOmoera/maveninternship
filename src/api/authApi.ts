import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import {
  TDefaultResponse,
  TLoginRequestBody,
  TLoginResponse,
  TSignUpRequestBody,
  TSignUpResponse,
  TUpdateUserRequestBody,
  TUserData,
  TVerifyEmailRequestBody,
} from "types/common";

export const getUserDataRequest = (): Promise<AxiosResponse<TUserData>> =>
  client.get(endpoints.auth.getUserData());

export const signUpRequest = (
  body: TSignUpRequestBody
): Promise<AxiosResponse<TSignUpResponse>> =>
  client.post(endpoints.auth.register(), body);

export const loginRequest = (
  body: TLoginRequestBody
): Promise<AxiosResponse<TLoginResponse>> =>
  client.post(endpoints.auth.login(), body, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;",
    },
  });

export const verifyEmailRequest = (
  body: TVerifyEmailRequestBody
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.auth.verifyEmail(), body);

export const updateUserRequest = (
  body: TUpdateUserRequestBody
): Promise<AxiosResponse<object>> =>
  client.put(endpoints.auth.updateUserProfile(), body, {
    params: { email: body.email },
  });

export const logoutRequest = (): Promise<AxiosResponse<TDefaultResponse>> =>
  client.post(endpoints.auth.logout());
