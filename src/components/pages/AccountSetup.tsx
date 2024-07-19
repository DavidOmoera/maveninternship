import { TextField } from "@mui/material";
import { Button } from "components/atoms/Button";

export function AccountSetup() {
  function handleAccountSetup() {}

  return (
    <div className="w-full flex flex-col justify-center items-center h-full p-4">
      <div className="w-[464px] flex flex-col items-center gap-4">
        <h3 className="font-extrabold text-xl">Personal Account Set-up</h3>
        <div className="w-full flex justify-between items-center">
          <span className="text-sm font-bold">1/3</span>
          <div className="flex-1 h-1 mx-2 bg-gray-200">
            <div className="w-1/3 h-full bg-blue-500"></div>
          </div>
        </div>

        <h2 className="font-extrabold text-2xl">Create your Account</h2>
        <p className="text-neutral450 text-center">
          Empower your experience, sign up for a premium account today.
        </p>
        <h3 className="font-extrabold text-lg w-full text-left">About You</h3>
        <div className="flex flex-col gap-4 mt-4 mb-6 w-full">
          <div className="flex gap-4">
            <TextField
              fullWidth
              label="First Name"
              type="first-name"
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Last Name"
              type="last-name"
              variant="outlined"
            />
          </div>

          <div className="flex gap-4">
            <TextField
              fullWidth
              label="Industry Affiliation"
              type="industry-affiliation"
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Industry Size"
              type="industry-size"
              variant="outlined"
            />
          </div>
        </div>

        <div className="w-full flex justify-between mt-6">
          <Button
            text="← Previous"
            className="bg-white-500"
            onClick={handleAccountSetup}
          />
          <Button
            text="Next →"
            className="text-white bg-blue-500"
            onClick={handleAccountSetup}
          />
        </div>
      </div>
    </div>
  );
}
