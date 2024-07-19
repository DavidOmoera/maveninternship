import TextField from "@mui/material/TextField";
import { Button } from "components/atoms/Button";
import { Routes } from "types/routes";

export function ResetPassword() {
  function handleResetPassword() {}

  return (
    <div className="w-full flex flex-col justify-center items-center h-full">
      <div className="w-[464px] flex flex-col items-center gap-2">
        <h1 className="font-extrabold">Reset Password</h1>
        <p className="text-neutral450">
          Enter your registered email to reset password
        </p>
        <div className="flex flex-col gap-4 mt-8 mb-6 w-full">
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            variant="outlined"
          />
        </div>
        <Button
          text="Reset Password"
          className="w-full flex flex-col justify-center items-center"
          onClick={handleResetPassword}
        />
        <span className="flex flex-row gap-2 mt-9">
          <p className="text-neutral450">Remember password?</p>
          <a href={Routes.Login}>
            <h4 className="text-accent900 font-bold">Login</h4>
          </a>
        </span>
      </div>
    </div>
  );
}
