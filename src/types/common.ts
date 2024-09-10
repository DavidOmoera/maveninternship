import { store } from "store";
import { AxiosInstance } from "axios";
import { ReactNode } from "react";

export type Representative = {
  image: string;
  name: string;
  district: number;
  description: string;
  pageType?: "House" | "Senate";
  id: number;
};

export type TSVGProps = Partial<{
  color: string;
  fillColor?: string;
}> &
  React.SVGProps<SVGSVGElement>;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type ThunkAPI = {
  state: RootState;
  dispatch: AppDispatch;
  extra: {
    client: AxiosInstance;
  };
};

export type TbillState = {
  bills: TBill[];
  totalBillsCount: number;
  isLoadingBills: boolean;
};

export type TUserData = {
  account_class: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  subscription_plan: string;
  stripe_subscription_id: string;
  subscription_start_date: Date | string;
  subscription_end_date: Date | string;
  card_number: number;
  registration_method: string;
  industry_affiliation: string;
  industry_size: string;
  avatar: string;
  id: number;
  is_active: boolean;
  is_verified: boolean;
};

type TAccountType = "demo" | "premium";
export type TAccountClass = "personal" | "corporate";
type TRole = "user" | "admin";

export type TSignUpRequestBody = {
  account_class: TAccountClass;
  first_name: string;
  last_name: string;
  email: string;
  role: TRole;
  subscription_plan: string;
  stripe_subscription_id?: string;
  subscription_start_date?: Date | string;
  subscription_end_date?: Date | string;
  card_number?: number;
  registration_method: string;
  industry_affiliation?: string;
  industry_size?: string;
  avatar?: string;
  password: string;
  confirm_password: string;
  account_type: TAccountType;
};

export type TSignUpResponse = {
  message: string;
  user: TUserData;
};

export type TBillContributor = {
  name: string;
  image: string;
  entity_type: string;
  title: string;
  primary: boolean;
  classification: "author" | "coauthor" | "sponsor";
};

export type TBill = {
  id: string;
  title: string;
  legislative_type: TBillType;
  state: string;
  status: string;
  latest_action_date: Date | string;
  summary: string;
  contributors: TBillContributor[];
};

export type TBillVotesParams = { bill_id: string; limit?: number };

export type TVote = {
  voter_name: string;
  full_name: string;
  role: string;
  image: string;
  date: string;
  voter_id: string;
};

export type TBillVotesResponse = {
  votes_for: number;
  votes_against: number;
  abstained: number;
  total_votes: number;
  voters: {
    voted_yes: TVote[];
    voted_no: TVote[];
    abstained: TVote[];
  };
};

export type TBillSummaryParams = {
  bill_id: string;
  version: string;
  state: string;
};

export type TBillSummaryResponse = {
  bill_id: string;
  version: string;
  summary: string;
};

export type TBillVersion = {
  id: string;
  note: string;
  date: string;
  extras: Record<string, string>;
  bill_id: string;
  classification: string;
};

export type TUpdateUserRequestBody = {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
};

export type TBillStatus = "Introduced" | "Enrolled" | "Passed";
export type TBillChamber = "House" | "Senate";
export type TBillType = "resolution" | "bill";

export type TGetBillsParams = Partial<{
  page: number;
  size: number;
}>;

export type TSearchBillsParams = TGetBillsParams &
  Partial<{
    skip: number;
    limit: number;
    search_term: string;
    identifier: string;
    bill_type: TBillType;
    status: TBillStatus[];
    sessions: string[];
    jurisdiction: string[];
    chamber: TBillChamber;
  }>;

export type TGetBillsSearchResponse = {
  items: TBill[];
  total: number;
  limit: number;
  offset: number;
};

export type TGetBillsResponse = {
  items: TBill[];
  total: number;
  page: number;
  size: number;
  pages: number;
};

export type TActivityParams = Partial<{
  search_term?: string;
  skip: number;
  limit: number;
}>;

export type TActivityLog = Partial<{
  activity_type: string;
  tag: string;
  description: string;
  user_id: number;
  id: number;
  timestamp: Date | string;
}>;

export type ActivityState = Partial<{
  activities: TActivityLog[];
  searchResults: TActivityLog[];
  loading: boolean;
  error: string | null;
}>;

export type TUserParams = Partial<{
  user_id: number;
  email: string;
}>;

export type TSearchUsersParams = Partial<
  TGetBillsParams &
  TUserParams & {
    account_class: string;
    subscription_plan: string;
  }
>;

export type TOrganizationParams = Partial<{
  org_id: number;
  email: string;
}>;

export type TRoleParams = Partial<
  TUserDetailsParams & {
    role: string;
  }
>;

export type TUserDetailsParams = Partial<{
  account_type: string;
  exp_date: string;
  subscription_start_date: string;
  subscription_id: string;
  subscription: string;
}>;

export type TUpdateOrgParams = Partial<TUserDetailsParams & TRoleParams>;
export type TUpdateUserParams = Partial<TUserDetailsParams & TUserParams>;

export type AdminState = {
  users: TUserData[];
  organizations: TUserData[];
  loading: boolean;
  error: string | undefined;
};

export type TLoginRequestBody = {
  username: string;
  password: string;
} & Partial<{
  grant_type: string;
  scope: string;
  client_id: string;
  client_secret: string;
}>;

export type TLoginResponse = {
  access_token: string;
  token_type: string;
};

export type TVerifyEmailRequestBody = {
  email: string;
  code: string;
};

export type THelpAndSupportForm = {
  first_name: string;
  last_name: string;
  company_name?: string;
  email_address: string;
  issue?: string;
  message: string;
};

export type TCreateFeedbackRequestBody = {
  issues: string[];
  duration: string;
  learn_more: boolean;
  user_id: number;
};

export type TCreateFeedbackResponse = {
  issues: string[];
  duration: string;
  learn_more: boolean;
  id: number;
  user_id: number;
  submitted_at: string;
};

export type TLegislativeSessionsParams = {
  jurisdiction: string;
  skip?: number;
  limit?: number;
};

export type TLegislativeSession = {
  identifier: string;
  name: string;
  classification: string;
  start_date: string;
  end_date: string;
  active: boolean;
  id: string;
};

// Define the response type as an array of legislative sessions
export type TGetLegislativeSessionsResponse = TLegislativeSession[];

export type TJurisdiction = {
  name: string;
  classification: string;
  created_at: string;
  updated_at: string;
  extras: Record<string, string>;
  url: string;
  division_id: string;
  latest_bill_update: string;
  latest_people_update: string;
};

// Define the response type as an array of jurisdictions
export type TGetJurisdictionsResponse = TJurisdiction[];

export type TDefaultResponse = { msg: string };

export enum BrowserStorageKeys {
  AccessToken = "accessToken",
}

export type BrowserStorageOptions = {
  session: boolean;
};

//notifications
export type TNotifications = {
  message: string;
  id: number;
  user_id: number;
  status: string;
  created_at: Date | string;
};

export type TNotificationsSettings = Partial<{
  notification_type: "email";
  frequency: "string";
  disabled: boolean;
  id?: number;
  user_id?: number;
}>;

export type NotificationsState = {
  notifications: TNotifications[];
  loading: boolean;
  error: string | null;
};

export type Committee = {
  created_at: string;
  updated_at: string;
  extras: Record<string, string>;
  name: string;
  classification: string;
  jurisdiction_id: string;
  parent_id: string;
  links: string[];
  sources: string[];
  other_names: string[];
  id: string;
};

export type CommitteeMembership = {
  representative_id: number;
  committee_id: string;
  start_date: ReactNode;
  end_date: string;
  createdAt: string;
  updatedAt: string;
  extras: Record<string, string>;

  personName: string;
  role: string;
  startDate: string;
  endDate: string;
  organizationId: string;
  personId: string;
  postId: string;
  id: string;
};

export type TGetCommitteesRequestParams = Partial<{
  jurisdiction: string;
  skip: number;
  limit: number;
}>;

export type TGetCommitteesResponse = Committee[];

export type TGetCommitteeResponse = Committee;

export type TGetCommitteeMembershipsResponse = CommitteeMembership[];

export type TPersonResponse = {
  created_at: string;
  updated_at: string;
  extras: Record<string, string>;
  name: string;
  family_name: string;
  given_name: string;
  image: string;
  gender: string;
  biography: string;
  birth_date: string;
  death_date?: string;
  primary_party: string;
  current_jurisdiction_id: string;
  serving_role: {
    title: string;
    district: number;
    division_id: string;
    org_classification: string;
  };
  email: string;
  id: string;
};


export type TPersonOfficesResponse = {
  classification: string;
  address: string;
  voice: string;
  fax?: string;
  name: string;
  person_id: string;
  id: string;
};

export type TPersonMembershipsResponse = {
  created_at: string;
  updated_at: string;
  extras: Record<string, string>;
  person_name: string;
  role: string;
  start_date: string;
  end_date?: string;
  organization_id: string;
  person_id: string;
  post_id: string;
  id: string;
};

export type TValidationErrorResponse = {
  detail: Array<{
    loc: (string | number)[];
    msg: string;
    type: string;
  }>;
};
