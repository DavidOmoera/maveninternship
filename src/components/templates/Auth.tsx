import { Button } from "components/atoms/Button";
import { Outlet } from "react-router-dom";
import OutlookLogo from "assets/outlook_logo.svg";
import GoogleLogo from "assets/google_logo.svg";

export function Auth() {
  function onSocialSignIn() {}

  return (
    <div className="flex flex-col mt-20 xl:flex-row xl:mt-0 h-full">
      <div className="md:basis-[56%]">
        <Outlet />
      </div>
      <aside className="hidden md:flex md:flex-col md:px-20 md:justify-center md:items-center md:gap-4 md:basis-[44%] bg-grey">
        <Button
          variant="secondary"
          text="Sign up with Google"
          leftIcon={<img src={GoogleLogo} className="logo" alt="Google logo" />}
          className="w-[372px]"
          onClick={onSocialSignIn}
        />
        <Button
          variant="secondary"
          text="Sign up with Outlook"
          leftIcon={
            <img src={OutlookLogo} className="logo" alt="Outlook logo" />
          }
          className="w-[372px]"
          onClick={onSocialSignIn}
        />
      </aside>
    </div>
  );
}
