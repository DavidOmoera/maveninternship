import { Button } from "components/atoms/Button";
import { Routes } from "types/routes";
import { useLocation, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "constants/schemas";
import { SubmitHandler, useForm } from "react-hook-form";
import { ControlledInput } from "components/organisms/ControlledInput";
import { useAppDispatch } from "utils/helpers";
import { login } from "store/slices/auth/thunks";

type TSignInForm = {
  email: string;
  password: string;
};

export function Login() {
  const location = useLocation();
  const signedUpEmail = location.state?.email as string;
  const navigate = useNavigate(); // Initialize useNavigate
  const dispatch = useAppDispatch();

  const {
    control,
    formState: { errors, isDirty, isSubmitting, isValid },
    handleSubmit,
  } = useForm<TSignInForm>({
    resolver: yupResolver(signInSchema),
  });

  function successCallback() {
    // Navigate to the dashboard page when login is successful
    navigate(Routes.Dashboard);
  }

  const handleLogin: SubmitHandler<TSignInForm> = (formData: TSignInForm) => {
    const { email: username, password } = formData ?? {};
    if (isValid) {
      dispatch(login({ username, password, successCallback }));
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center h-full">
      <div className="w-[464px] flex flex-col items-center gap-2 px-9 lg:px-0">
        <h1 className="font-extrabold">Login</h1>
        <span className="flex flex-row gap-2">
          <p className="text-neutral450">Don't have an account?</p>
          <a href={Routes.SignUp}>
            <h6 className="text-accent900 font-bold">Sign Up</h6>
          </a>
        </span>
        <div className="flex flex-col gap-4 mt-8 mb-6 w-full">
          <ControlledInput
            control={control}
            required
            name="email"
            label="Email Address"
            placeholder="Email Address"
            error={!!errors?.email}
            defaultValue={signedUpEmail ?? ""}
            helperText={(errors?.email?.message as string) ?? ""}
          />
          <ControlledInput
            control={control}
            required
            name="password"
            label="Password"
            type="password"
            placeholder="Password"
            error={!!errors?.password}
            helperText={(errors?.password?.message as string) ?? ""}
          />
          <div className="flex flex-row justify-end">
            <a href={Routes.ResetPassword}>
              <p className="underline font-semibold">Forgot password</p>
            </a>
          </div>
        </div>
        <Button
          text="Log In"
          disabled={!isDirty || isSubmitting}
          className="w-full flex flex-col justify-center items-center"
          onClick={handleSubmit(handleLogin)}
        />
      </div>
    </div>
  );
}
