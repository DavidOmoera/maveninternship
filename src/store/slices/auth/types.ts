export type TUserProfile = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  profilePicture: string;
  plan: string;
};

export type TAuthState = Partial<{
  accessToken: string;
  userData: TUserProfile;
  userDataError: string;
  userDataLoading: boolean;
}>;
