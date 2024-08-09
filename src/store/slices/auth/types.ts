export type TUserProfile = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export type TAuthState = Partial<{
  userData: TUserProfile;
  userDataError: string;
  userDataLoading: boolean;
}>;
