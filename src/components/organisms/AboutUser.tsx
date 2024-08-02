import { TAboutUserForm } from "components/pages/AccountSetup";
import { ControlledInput } from "./ControlledInput";
import { Control, FieldErrors } from "react-hook-form";
import profilePlaceholder from "assets/profile_placeholder.svg";

type TAboutUserProps = {
  control: Control<TAboutUserForm, any>;
  errors: FieldErrors<TAboutUserForm>;
};

export function AboutUser({ control, errors }: TAboutUserProps) {
  return (
    <>
      <h1 className="font-extrabold text-2xl">Create your Account</h1>
      <p className="text-neutral450 pb-10">
        Empower your experience, sign up for a premium account today.
      </p>
      <h3 className="font-extrabold text-lg w-full text-left">About You</h3>
      <div className="flex flex-col gap-4 mt-4 mb-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ControlledInput
            control={control}
            label="First Name"
            required
            name="firstName"
            placeholder="First Name"
            containerClasses="basis-[40%] rounded-lg"
            error={!!errors?.firstName}
            helperText={(errors?.firstName?.message as string) ?? ""}
          />

          <ControlledInput
            control={control}
            label="Last Name"
            required
            name="lastName"
            placeholder="Last Name"
            containerClasses="basis-[40%] rounded-lg"
            error={!!errors?.lastName}
            helperText={(errors?.lastName?.message as string) ?? ""}
          />
          <ControlledInput
            control={control}
            label="Industry Affiliation"
            required
            name="industryAffiliation"
            placeholder="Industry Affiliation"
            containerClasses="basis-[40%] rounded-lg"
            error={!!errors?.industryAffiliation}
            helperText={(errors?.industryAffiliation?.message as string) ?? ""}
          />

          <ControlledInput
            control={control}
            label="Industry Size"
            required
            name="industrySize"
            placeholder="Industry Size"
            containerClasses="basis-[40%] rounded-lg"
            error={!!errors?.industrySize}
            helperText={(errors?.industrySize?.message as string) ?? ""}
          />
        </div>
      </div>
      <div className="row gap-4">
        <div className="col items-center justify-center p-4 border border-[#B0CAE5] rounded-lg bg-[#E6EEF7]">
          <img src={profilePlaceholder} />
        </div>
        <div className="col gap-2">
          <h6>Avatar</h6>
          <div
            className="border-[#0054AA] border rounded-full cursor-pointer"
            onClick={() => {}}
          >
            <p className="text-[#0054AA] px-2 py-1">Upload photo</p>
          </div>
        </div>
      </div>
    </>
  );
}
