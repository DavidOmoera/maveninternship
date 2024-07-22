import { Button } from "components/atoms/Button";
import email from "assets/email-logo.svg"


export function ConfirmEmail() {
  function ConfirmEmail() {}

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-full">
          <img src="/src/assets/email-login.svg" alt="Email icon" className="w-8 h-8" />
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
