import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import { TSignUpRequestBody, TSignUpResponse } from "types/common";

export const signUpRequest = (
  body: TSignUpRequestBody
): Promise<AxiosResponse<TSignUpResponse>> =>
  client.post(endpoints.auth.register(), body);
