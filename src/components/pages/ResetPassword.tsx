import { yupResolver } from "@hookform/resolvers/yup";
import {
  initiatePasswordResetRequest,
  resetPasswordRequest,
} from "api/authApi";
import { Button } from "components/atoms/Button";
import { ControlledInput } from "components/organisms/ControlledInput";
import {
  initiateResetPasswordSchema,
  resetPasswordSchema,
} from "constants/schemas";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { Routes } from "types/routes";
import { handleError, showSuccessToast } from "utils/helpers";
import emailIcon from "assets/reset_password_icon.svg";

type TInitiateResetPasswordForm = {
  email: string;
};

type TResetPasswordForm = {
  password: string;
  confirm_password: string;
};

export function ResetPassword() {
  const [searchParams] = useSearchParams();
  const emailFromURL = searchParams.get("email");
  const codeFromURL = searchParams.get("code");
  const description = !codeFromURL
    ? "Enter your registered email to reset password"
    : "Change your password to access your account";

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [resetPasswordLinkSent, setResetPasswordLinkSent] =
    useState<boolean>(false);
  const {
    control: initiateResetPasswordFormControl,
    formState: {
      errors: initiateResetPasswordFormErrors,
      isDirty: initiateResetPasswordFormIsDirty,
      isSubmitting: initiateResetPasswordFormIsSubmitting,
      isValid: initiateResetPasswordFormIsValid,
    },
    handleSubmit: handleInitiateResetPasswordFormSubmit,
  } = useForm<TInitiateResetPasswordForm>({
    resolver: yupResolver(initiateResetPasswordSchema),
  });

  const {
    control: resetPasswordFormControl,
    formState: {
      errors: resetPasswordFormErrors,
      isDirty: resetPasswordFormIsDirty,
      isSubmitting: resetPasswordFormIsSubmitting,
      isValid: resetPasswordFormIsValid,
    },
    reset: resetPasswordResetForm,
    handleSubmit: handleResetPasswordFormSubmit,
  } = useForm<TResetPasswordForm>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const handleResetPasswordInitiation: SubmitHandler<
    TInitiateResetPasswordForm
  > = (formData: TInitiateResetPasswordForm) => {
    if (initiateResetPasswordFormIsValid) {
      setIsLoading(true);
      initiatePasswordResetRequest(formData.email)
        .then(() => {
          setResetPasswordLinkSent(true);
        })
        .catch(handleError)
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleResettingPassword: SubmitHandler<TResetPasswordForm> = (
    formData: TResetPasswordForm
  ) => {
    if (resetPasswordFormIsValid) {
      setIsLoading(true);
      resetPasswordRequest({
        email: emailFromURL as string,
        token: codeFromURL as string,
        new_password: formData.password,
      })
        .then(() => {
          showSuccessToast("Your password has been reset successfully!");
          resetPasswordResetForm();
        })
        .catch(handleError)
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center h-full">
      {!resetPasswordLinkSent ? (
        <div className="w-[464px] flex flex-col items-center gap-2">
          <h1 className="font-extrabold">Reset Password</h1>
          <p className="text-neutral450">{description}</p>
          <div className="flex flex-col gap-4 mt-8 mb-6 w-full">
            {codeFromURL ? (
              <>
                <ControlledInput
                  control={resetPasswordFormControl}
                  required
                  name="password"
                  label="Create Password"
                  type="password"
                  placeholder="Create Password"
                  error={!!resetPasswordFormErrors?.password}
                  helperText={
                    (resetPasswordFormErrors?.password?.message as string) ?? ""
                  }
                />
                <ControlledInput
                  control={resetPasswordFormControl}
                  required
                  name="confirm_password"
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm Password"
                  error={!!resetPasswordFormErrors?.confirm_password}
                  helperText={
                    (resetPasswordFormErrors?.confirm_password
                      ?.message as string) ?? ""
                  }
                />
              </>
            ) : (
              <ControlledInput
                control={initiateResetPasswordFormControl}
                required
                name="email"
                type="email"
                label="Email Address"
                placeholder="Email Address"
                error={!!initiateResetPasswordFormErrors?.email}
                defaultValue=""
                helperText={
                  (initiateResetPasswordFormErrors?.email?.message as string) ??
                  ""
                }
              />
            )}
          </div>
          {!codeFromURL ? (
            <Button
              text="Reset Password"
              disabled={
                isLoading ||
                !initiateResetPasswordFormIsDirty ||
                initiateResetPasswordFormIsSubmitting
              }
              className="w-full flex flex-col justify-center items-center"
              onClick={handleInitiateResetPasswordFormSubmit(
                handleResetPasswordInitiation
              )}
            />
          ) : (
            <Button
              text="Reset Password"
              disabled={
                isLoading ||
                !resetPasswordFormIsDirty ||
                resetPasswordFormIsSubmitting
              }
              className="w-full flex flex-col justify-center items-center"
              onClick={handleResetPasswordFormSubmit(handleResettingPassword)}
            />
          )}
          <span className="flex flex-row gap-2 mt-9">
            <p className="text-neutral450">Remember password?</p>
            <a href={Routes.Login} className="text-accent900 font-bold">
              Login
            </a>
          </span>
        </div>
      ) : (
        <div className="w-[464px] flex flex-col items-center gap-6">
          <img src={emailIcon} />
          <article className="text-center gap-4">
            <h2>Reset Password</h2>
            <p className="text-neutral500">
              A link to reset your password has been sent to your email.
            </p>
          </article>
        </div>
      )}
    </div>
  );
}
