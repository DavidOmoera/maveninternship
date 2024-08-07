export enum Routes {
  // Unauthenticated
  Home = "/",
  SignUp = "/sign-up",
  Login = "/login",
  ConfirmEmail = "/confirm-email",
  AccountSetup = "/account-setup",
  ResetPassword = "/reset-password",

  // Authenticated
  Dashboard = "/dashboard",
  ChangePassword = "/change-password",
  ActivityFeed = "/dashboard/activity-feed",
  DetailsOfBill = "/dashboard/bill",
  RepProfile = "/dashboard/representative",
  Profile = "/dashboard/profile",
  Bills = "/dashboard/bills",
  HelpAndSupport = "/dashboard/help",
}
