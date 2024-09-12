import {
  TCreateOrgAccount,
  TUpdateUserRequestBody,
  TUserData,
} from "types/common";

export type TAuthState = Partial<{
  accessToken: string;
  userData: TUserData & Partial<{ phone: string }>; // remove extra type when backend adds it
  updateProfile: TUpdateUserRequestBody;
  organizationData: TCreateOrgAccount;
  userDataError: string;
  userDataLoading: boolean;
  isSigningUp: boolean;
}>;
