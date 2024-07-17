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

const routes = createBrowserRouter([
  {
    path: Routes.Home,
    element: <UnauthenticatedRoot />,
    errorElement: <NotFound />,
    children: [
      {
        path: Routes.SignUp,
        element: <SignUp />,
      },
      {
        path: Routes.Login,
        element: <Login />,
      },
      {
        path: Routes.ConfirmEmail,
        element: <ConfirmEmail />,
      },
      {
        path: Routes.AccountSetup,
        element: <Login />,
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
        path: Routes.Dashboard,
        element: <Dashboard />,
      },
    ],
  },
]);

export default routes;
