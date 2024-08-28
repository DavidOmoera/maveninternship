import { TUserData } from "types/common";

export type TAuthState = Partial<{
  accessToken: string;
  userData: TUserData & Partial<{ phone: string }>; // remove extra type when backend adds it
  userDataError: string;
  userDataLoading: boolean;
}>;
