import { createBrowserRouter } from "react-router-dom";
import { Routes } from "types/routes";
import { AuthenticatedRoot } from "components/templates/AuthenticatedRoot";
import { UnauthenticatedRoot } from "components/templates/UnauthenticatedRoot";
import { NotFound } from "components/pages/NotFound";
import { SignUp } from "components/pages/SignUp";
import { Login } from "components/pages/Login";
import { ResetPassword } from "components/pages/ResetPassword";
import { ConfirmEmail } from "components/pages/ConfirmEmail";
import { Dashboard } from "components/pages/Dashboard";
import { Auth } from "components/templates/Auth";
import { AccountSetup } from "components/pages/AccountSetup";
import DetailsOfBill from "components/pages/DetailsOfBill";
import { RepProfile } from "components/pages/RepProfile";

const routes = createBrowserRouter([
  {
    path: Routes.Home,
    element: <UnauthenticatedRoot />,
    errorElement: <NotFound />,
    children: [
      {
        path: Routes.SignUp,
        element: <Auth />,
        children: [{ path: Routes.SignUp, element: <SignUp /> }],
      },
      {
        path: Routes.Login,
        element: <Auth />,
        children: [{ path: Routes.Login, element: <Login /> }],
      },
      {
        path: Routes.ConfirmEmail,
        element: <ConfirmEmail />,
      },
      {
        path: Routes.AccountSetup,
        element: <AccountSetup />,
      },
      {
        path: Routes.ResetPassword,
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: Routes.Dashboard,
    element: <AuthenticatedRoot />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: Routes.DetailsOfBill,
        element: <DetailsOfBill />,
      },
      {
        path: Routes.RepProfile,
        element: <RepProfile />,
      },
    ],
  },
]);

export default routes;
