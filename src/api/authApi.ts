import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import {
  TDefaultResponse,
  TLoginRequestBody,
  TLoginResponse,
  TResetPasswordRequestBody,
  TSignUpRequestBody,
  TSignUpResponse,
  TUpdateUserRequestBody,
  TUserData,
  TVerifyEmailRequestBody,
  TSendReceiptParams,
  TCheckoutParams,
  TCheckoutResponse,
  TCreateOrgAccount,
  TRegisterOrg,
  TOrgDetails,
  TPersonDetails,
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

export const initiatePasswordResetRequest = (
  email: string
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.auth.initiatePasswordReset(), { email });

export const resetPasswordRequest = (
  requestBody: TResetPasswordRequestBody
): Promise<AxiosResponse<string>> =>
  client.post(endpoints.auth.resetPassword(), requestBody);

export const logoutRequest = (): Promise<AxiosResponse<TDefaultResponse>> =>
  client.post(endpoints.auth.logout());

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

export const initiatePasswordResetRequest = (): Promise<
  AxiosResponse<string>
> => client.post(endpoints.auth.initiatePasswordReset());

export const resetPasswordRequest = (): Promise<AxiosResponse<string>> =>
  client.post(endpoints.auth.resetPassword());

export const createCheckoutSessionRequest = (
  params: TCheckoutParams
): Promise<AxiosResponse<TCheckoutResponse>> =>
  client.post(endpoints.auth.createCheckoutSession(), params);

export const stripeWebhookRequest = (): Promise<AxiosResponse<string>> =>
  client.post(endpoints.auth.stripeWebhook());

export const accountCreationRequest = (): Promise<
  AxiosResponse<TCreateOrgAccount>
> => client.post(endpoints.auth.accountCreation());

export const getUserDetailsRequest = (
  identifier: string
): Promise<AxiosResponse<TUserData>> =>
  client.get(endpoints.auth.getUserDetails(), { params: { id: identifier } });

export const registerOrganizationRequest = (): Promise<
  AxiosResponse<TRegisterOrg>
> => client.post(endpoints.auth.registerOrganization());

export const resetPersonalAccountRequest = (): Promise<
  AxiosResponse<TPersonDetails>
> => client.post(endpoints.auth.resetPersonalAccount());

export const getOrganizationRequest = (
  identifier: string
): Promise<AxiosResponse<TOrgDetails>> =>
  client.get(endpoints.auth.getUserDetails(), { params: { id: identifier } });

export const updateOrganizationDetailsRequest = (
  email: string
): Promise<AxiosResponse<string>> =>
  client.put(endpoints.auth.updateOrganizationDetails(), email);

export const updateOrganizationContactDetailsRequest = (
  email: string
): Promise<AxiosResponse<string>> =>
  client.put(endpoints.auth.updateOrganizationContactDetails(), email);
