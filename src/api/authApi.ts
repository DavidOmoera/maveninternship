import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import {
  TSignUpRequestBody,
  TSignUpResponse,
  TUpdateUserRequestBody,
  TUserData,
} from "types/common";

export const getUserDataRequest = (): Promise<AxiosResponse<TUserData>> =>
  client.get(endpoints.auth.getUserData());

export const signUpRequest = (
  body: TSignUpRequestBody
): Promise<AxiosResponse<TSignUpResponse>> =>
  client.post(endpoints.auth.register(), body);

export const updateUserRequest = (
  body: TUpdateUserRequestBody
): Promise<AxiosResponse<object>> =>
  client.put(endpoints.auth.updateUserProfile(), body, {
    params: { email: body.email },
  });
