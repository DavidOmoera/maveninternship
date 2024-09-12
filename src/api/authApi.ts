import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import {
  TDefaultResponse,
  TLoginRequestBody,
  TLoginResponse,
  TSignUpRequestBody,
  TSignUpResponse,
  TUserData,
  TVerifyEmailRequestBody,
  TSendReceiptParams,
  TCheckoutParams,
  TCheckoutResponse,
  TCreateOrgAccount,
  TRegisterOrg,
} from "types/common";

export const getUserDataRequest = (): Promise<AxiosResponse<TUserData>> =>
  client.get(endpoints.auth.getUserData());

export const signUpRequest = (
  body: TSignUpRequestBody
): Promise<AxiosResponse<TSignUpResponse>> =>
  client.post(endpoints.auth.register(), body);

export const logoutRequest = (): Promise<AxiosResponse<TDefaultResponse>> =>
  client.post(endpoints.auth.logout());

export const verifyEmailRequest = (
  body: TVerifyEmailRequestBody
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.auth.verifyEmail(), body);

export const initiatePasswordResetRequest = (): Promise<
  AxiosResponse<string>
> => client.post(endpoints.auth.initiatePasswordReset());

export const resetPasswordRequest = (): Promise<AxiosResponse<string>> =>
  client.post(endpoints.auth.resetPassword());

export const loginRequest = (
  body: TLoginRequestBody
): Promise<AxiosResponse<TLoginResponse>> =>
  client.post(endpoints.auth.login(), body, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;",
    },
  });

export const sendReceiptRequest = (
  params: TSendReceiptParams
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.auth.send_receipt(), params);

export const resendVerificationEmailRequest = (
  email: string
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.auth.resendVerificationEmail(), email);

export const loginWithGoogleRequest = (
  email: string
): Promise<AxiosResponse<TLoginResponse>> =>
  client.post(endpoints.auth.loginWithGoogle(), email);

export const loginWithOutlookRequest = (
  email: string
): Promise<AxiosResponse<TLoginResponse>> =>
  client.post(endpoints.auth.loginWithOutlook(), email);

export const accountCreationRequest = (): Promise<
  AxiosResponse<TCreateOrgAccount>
> => client.post(endpoints.auth.accountCreation());

export const registerOrganizationRequest = (): Promise<
  AxiosResponse<TRegisterOrg>
> => client.post(endpoints.auth.registerOrganization());

export const createCheckoutSessionRequest = (
  params: TCheckoutParams
): Promise<AxiosResponse<TCheckoutResponse>> =>
  client.post(endpoints.auth.createCheckoutSession(), params);
