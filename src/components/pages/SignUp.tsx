import { Button } from "components/atoms/Button";
import { Routes } from "types/routes";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/joy/Radio";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TAccountClass } from "types/common";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "constants/schemas";
import { handleError, useAppDispatch, useAppSelector } from "utils/helpers";
import { signUp } from "store/slices/auth/thunks";
import { signingUpSelector } from "store/slices/auth/selectors";
import { ControlledInput } from "components/organisms/ControlledInput";
import { AuthToastMessages } from "constants/toastMessages";

type TSignUpForm = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export function SignUp() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSigningUp = useAppSelector(signingUpSelector);
  const [accountType, setAccountType] = useState<TAccountClass>("personal");
  const [hasAgreedTerms, setHasAgreedTerms] = useState<boolean>(false);

  const {
    control,
    formState: { errors, isDirty, isSubmitting, isValid },
    handleSubmit,
  } = useForm<TSignUpForm>({
    resolver: yupResolver(signUpSchema),
  });

  const isSignUpDisabled = useMemo(
    () => !isDirty || isSubmitting || isSigningUp || !hasAgreedTerms,
    [hasAgreedTerms, isDirty, isSigningUp, isSubmitting]
  );

  const onCreateDemoAccount: SubmitHandler<TSignUpForm> = (
    formData: TSignUpForm
  ) => {
    if (isValid) {
      dispatch(
        signUp({
          ...formData,
          account_class: accountType,
          role: "user",
          subscription_plan: "free",
          registration_method: "form",
          account_type: "demo",

          // dummy data to make sign up for demo account work
          stripe_subscription_id: "something",
          subscription_start_date: new Date().toJSON(),
          subscription_end_date: new Date().toJSON(),
          card_number: 0,
          avatar: "something",
        })
      )
        .unwrap()
        .then(() => {
          navigate(Routes.ConfirmEmail);
        })
        .catch((e) => {
          handleError(e, AuthToastMessages.SIGNUP_FAILURE);
        });
    }
  };

  function toggleTermsAcceptance() {
    setHasAgreedTerms((prevState) => !prevState);
  }

  function onCreatePremiumAccount() {
    navigate(Routes.AccountSetup);
  }

  function onSelectAccountType(event: React.ChangeEvent<HTMLInputElement>) {
    setAccountType(event.target.value as TAccountClass);
  }

  function selectPersonalAccountType() {
    setAccountType("personal");
  }

  function selectCompanyAccountType() {
    setAccountType("corporate");
  }

  return (
    <div className="w-full col justify-center items-center h-full px-4 md:px-10">
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
                checked={accountType === "corporate"}
                onChange={onSelectAccountType}
              />
              <p
                onClick={selectCompanyAccountType}
                className={accountType !== "corporate" ? "text-neutral450" : ""}
              >
                Company
              </p>
            </div>
          </div>
        </div>
        <div className="col gap-4 mt-4 mb-3 w-full">
          <div className="flex flex-row gap-3">
            <ControlledInput
              control={control}
              required
              name="first_name"
              label="First Name"
              placeholder="First Name"
              error={!!errors?.first_name}
              helperText={(errors?.first_name?.message as string) ?? ""}
            />
            <ControlledInput
              control={control}
              required
              name="last_name"
              label="Last Name"
              placeholder="Last Name"
              error={!!errors?.last_name}
              helperText={(errors?.last_name?.message as string) ?? ""}
            />
          </div>
          <ControlledInput
            control={control}
            required
            name="email"
            label="Email Address"
            placeholder="Email Address"
            error={!!errors?.email}
            helperText={(errors?.email?.message as string) ?? ""}
          />
          <ControlledInput
            control={control}
            required
            name="password"
            label="Create Password"
            type="password"
            placeholder="Create Password"
            error={!!errors?.password}
            helperText={(errors?.password?.message as string) ?? ""}
          />
          <ControlledInput
            control={control}
            required
            name="confirm_password"
            label="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            error={!!errors?.confirm_password}
            helperText={(errors?.confirm_password?.message as string) ?? ""}
          />
        </div>
        <div className="w-full flex flex-row items-center mb-4 gap-1">
          <Checkbox
            sx={{ padding: 0 }}
            checked={hasAgreedTerms}
            onClick={toggleTermsAcceptance}
          />
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
          disabled={isSignUpDisabled}
          className="w-full col justify-center items-center"
          onClick={handleSubmit(onCreateDemoAccount)}
        />
        <Button
          text="Create Premium Account"
          disabled={isSignUpDisabled}
          className="w-full col justify-center items-center mt-2"
          onClick={onCreatePremiumAccount}
        />
      </div>
    </div>
  );
}
