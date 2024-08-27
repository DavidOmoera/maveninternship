import { store } from "store";
import { AxiosInstance } from "axios";

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

export type TSignUpRequestBody = {
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
  password: string;
  confirm_password: string;
  account_type: string;
};

export type TSignUpResponse = {
  message: string;
  user: TUserData;
};

export type TBill = {
  created_at: Date | string;
  updated_at: Date | string;
  extras: Record<string, string>;
  identifier: string;
  title: string;
  classification: string[];
  subject: string[];
  first_action_date: string;
  latest_action_date: string;
  latest_action_description: string;
  latest_passage_date: string;
  latest_action_category: string[];
  latest_action_category_date: string;
  citations: string[];
  opencivicdata_organization: {
    name: string;
    classification: string;
    opencivicdata_jurisdiction: {
      name: string;
      classification: string;
    };
  };
  opencivicdata_legislativesession: {
    identifier: string;
    name: string;
    classification: string;
    start_date: Date | string;
    end_date: Date | string;
    active: boolean;
  };
  id: string;
};

export type TUpdateUserRequestBody = {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
};

type TBillStatus = "Introduced" | "Enrolled" | "Passed";
type TBillChamber = "House" | "Senate";

export type TGetBillsParams = Partial<{
  skip: number;
  limit: number;
}>;

export type TSearchBillsParams = Partial<
  TGetBillsParams & {
    search_term: string;
    identifier: string;
    bill_type: string;
    status: TBillStatus[];
    sessions: string[];
    jurisdiction: string[];
    chamber: TBillChamber;
  }
>;

export type TGetBillsResponse = TBill[];

export type TAdmin = {
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

export type TActivityLogs = {
  activity_type: string;
  description: string;
  user_id: number;
};

export type TActivityLogsResponse = {
  activity_type: string;
  description: string;
  user_id: number;
  id: number;
  timestamp: Date | string;
};

export type TActivityLogsResponseParams = Partial<{
  skip: number;
  limit: number;
}>;
