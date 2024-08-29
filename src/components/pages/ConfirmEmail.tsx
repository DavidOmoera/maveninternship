import { Button } from "components/atoms/Button";
import email from "assets/email-logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { Routes } from "types/routes";
import { useEffect } from "react";
import { verifyEmailRequest } from "api/authApi";

export function ConfirmEmail() {
  const location = useLocation();
  const { email: emailAddress, code } = location.state ?? {};
  const navigate = useNavigate();

  useEffect(() => {
    // Verify user's email as soon as they load this page
    verifyEmailRequest({ email: emailAddress, code })
      .then(() => {})
      .catch();
  }, [code, emailAddress]);

  function ConfirmEmail() {
    navigate(Routes.Login, { state: { email: location.state?.email ?? "" } });
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-full">
          <img src={email} alt="Email icon" className="w-8 h-8" />
        </div>
        <h2 className=" text-2xl font-extrabold text-neutral-900">
          Confirm Email Address
        </h2>
        <p className="text-neutral-600">
          We have just sent a verification link to your email.
        </p>

        <p className="text-neutral600">
          Confirm your email address to continue on to the live demo!
        </p>

        <Button
          text="Go to live Demo"
          className="text-white bg-blue-900 mt-4"
          onClick={ConfirmEmail}
        />
      </div>
    </div>
  );
}
