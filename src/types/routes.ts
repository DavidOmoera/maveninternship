export enum Routes {
  // Unauthenticated
  Home = "/",
  SignUp = "/sign-up",
  Login = "/login",
  ConfirmEmail = "/email-confirmation-page",
  AccountSetup = "/account-setup",
  ResetPassword = "/reset-password",

  // Authenticated
  Dashboard = "/dashboard",
  ChangePassword = "/change-password",
  ActivityFeed = "/dashboard/activity-feed",
  DetailsOfBill = "/dashboard/bill",
  RepProfile = "/dashboard/representative",
  Profile = "/dashboard/profile",
  ChangePlan = "/dashboard/profile/change-plan",

  Representatives = "/dashboard/representatives",

  // Representatives Sub-sections
  TopReps = "/dashboard/representatives/top",
  HouseReps = "/dashboard/representatives/house",
  SenateReps = "/dashboard/representatives/senate",
  Bills = "/dashboard/bills",
  HelpAndSupport = "/dashboard/help",
}
