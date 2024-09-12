import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import {
  TUserData,
  TOrgDetails,
  TPersonDetails,
  TUpdateOrganizationRequestBody,
  TUpdateUserRequestBody,
} from "types/common";

export const getUserDetailsRequest = (
  identifier: string
): Promise<AxiosResponse<TUserData>> =>
  client.get(endpoints.auth.getUserDetails(), { params: { id: identifier } });

export const updateUserRequest = (
  body: TUpdateUserRequestBody
): Promise<AxiosResponse<string>> =>
  client.put(endpoints.auth.updateUserProfile(), body, {
    params: { email: body.email },
  });

export const resetPersonalAccountRequest = (): Promise<
  AxiosResponse<TPersonDetails>
> => client.post(endpoints.auth.resetPersonalAccount());

export const getOrganizationRequest = (
  identifier: string
): Promise<AxiosResponse<TOrgDetails>> =>
  client.get(endpoints.auth.getUserDetails(), { params: { id: identifier } });

export const updateOrganizationDetailsRequest = (
  email: string,
  body: TUpdateOrganizationRequestBody
): Promise<AxiosResponse<string>> =>
  client.put(endpoints.auth.updateOrganizationDetails(), { ...body, email });

export const updateOrganizationContactDetailsRequest = (
  email: string
): Promise<AxiosResponse<string>> =>
  client.put(endpoints.auth.updateOrganizationContactDetails(), email);

export const stripeWebhookRequest = (): Promise<AxiosResponse<string>> =>
  client.post(endpoints.auth.stripeWebhook());
