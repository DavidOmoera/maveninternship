import { Button } from "components/atoms/Button";
import TextField from "@mui/material/TextField";
import { Routes } from "types/routes";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

export function Login() {
  const navigate = useNavigate(); // Initialize useNavigate

  function handleLogin() {
    // Navigate to the dashboard page when login is successful
    navigate(Routes.Dashboard);
  }

  return (
    <div className="w-full flex flex-col justify-center items-center h-full">
      <div className="w-[464px] flex flex-col items-center gap-2">
        <h1 className="font-extrabold">Login</h1>
        <span className="flex flex-row gap-2">
          <p className="text-neutral450">Don't have an account?</p>
          <a href={Routes.SignUp}>
            <h4 className="text-accent900 font-bold">Sign Up</h4>
          </a>
        </span>
        <div className="flex flex-col gap-4 mt-8 mb-6 w-full">
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
          />
          <div className="flex flex-row justify-end">
            <a href={Routes.ResetPassword}>
              <p className="underline font-semibold">Forgot password</p>
            </a>
          </div>
        </div>
        <Button
          text="Log In"
          className="w-full flex flex-col justify-center items-center"
          onClick={handleLogin}
        />
      </div>
    </div>
  );
}
