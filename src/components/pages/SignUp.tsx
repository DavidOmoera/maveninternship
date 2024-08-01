import TextField from "@mui/material/TextField";
import { Button } from "components/atoms/Button";
import { Routes } from "types/routes";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/joy/Radio";
import { useState } from "react";

type TAccountType = "personal" | "company";
export function SignUp() {
  const [accountType, setAccountType] = useState<TAccountType>("personal");
  function onSignUp() {}

  function onSelectAccountType(event: React.ChangeEvent<HTMLInputElement>) {
    setAccountType(event.target.value as TAccountType);
  }

  function selectPersonalAccountType() {
    setAccountType("personal");
  }

  function selectCompanyAccountType() {
    setAccountType("company");
  }

  return (
    <div className="w-full col justify-center items-center h-full overflow-y-scroll px-4 md:px-0">
      <div className="w-[464px] col items-center gap-2">
        <h1 className="font-extrabold">Sign Up</h1>
        <span className="flex flex-row gap-2">
          <p className="text-neutral450">Already have an account?</p>
          <a href={Routes.Login}>
            <h6 className="text-accent900 font-bold">Login</h6>
          </a>
        </span>

        <div className="w-full mt-8 col gap-2">
          <p className="font-semibold">Account Type</p>
          <div className="row gap-4">
            <div className="gap-1 row items-center">
              <Radio
                value="personal"
                checked={accountType === "personal"}
                onChange={onSelectAccountType}
              />
              <p
                onClick={selectPersonalAccountType}
                className={accountType !== "personal" ? "text-neutral450" : ""}
              >
                Personal
              </p>
            </div>
            <div className="gap-1 row items-center">
              <Radio
                value="company"
                checked={accountType === "company"}
                onChange={onSelectAccountType}
              />
              <p
                onClick={selectCompanyAccountType}
                className={accountType !== "company" ? "text-neutral450" : ""}
              >
                Company
              </p>
            </div>
          </div>
        </div>
        <div className="col gap-4 mt-4 mb-3 w-full">
          <div className="flex flex-row gap-3">
            <TextField
              fullWidth
              label="First Name"
              type="text"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Last Name"
              type="text"
              variant="outlined"
            />
          </div>
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Create Password"
            type="password"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
          />
        </div>
        <div className="w-full flex flex-row items-center mb-4 gap-1">
          <Checkbox sx={{ padding: 0 }} />
          <span className="flex flex-row gap-2">
            <p className="text-neutral450">I agree with the</p>
            <a href="#">
              <h6 className="text-accent900 font-bold">Terms & Conditions</h6>
            </a>
            <p>and</p>
            <a href="#">
              <h6 className="text-accent900 font-bold">Privacy Policy</h6>
            </a>
          </span>
        </div>

        <Button
          text="Create Demo Account"
          className="w-full col justify-center items-center"
          onClick={onSignUp}
        />
        <Button
          text="Create Premium Account"
          className="w-full col justify-center items-center mt-2"
          onClick={onSignUp}
        />
      </div>
    </div>
  );
}
