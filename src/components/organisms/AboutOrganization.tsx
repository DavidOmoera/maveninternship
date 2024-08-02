import { TAboutOrganizationForm } from "components/pages/AccountSetup";
import { ControlledInput } from "./ControlledInput";
import { Control, FieldErrors } from "react-hook-form";
import profilePlaceholder from "assets/profile_placeholder.svg";

type TAboutUserProps = {
  control: Control<TAboutOrganizationForm, any>;
  errors: FieldErrors<TAboutOrganizationForm>;
};

export function AboutOrganization({ control, errors }: TAboutUserProps) {
  return (
    <>
      <h1 className="font-extrabold text-2xl">Create your Account</h1>
      <p className="text-neutral450 pb-10">
        Empower your experience, sign up for a premium account today.
      </p>
      <h3 className="font-extrabold text-lg mb-6 w-full text-left">
        About your Organization
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 w-full">
        <ControlledInput
          control={control}
          label="Organization Name"
          required
          name="organization_name"
          placeholder="Organization Name"
          containerClasses="basis-[40%] rounded-lg"
          error={!!errors?.organization_name}
          helperText={(errors?.organization_name?.message as string) ?? ""}
        />

        <ControlledInput
          control={control}
          label="Industry"
          required
          name="industry"
          placeholder="Industry"
          containerClasses="basis-[40%] rounded-lg"
          error={!!errors?.industry}
          helperText={(errors?.industry?.message as string) ?? ""}
        />
        <ControlledInput
          control={control}
          label="Business Type"
          required
          name="business_type"
          placeholder="Business Type"
          containerClasses="basis-[40%] rounded-lg"
          error={!!errors?.business_type}
          helperText={(errors?.business_type?.message as string) ?? ""}
        />

        <ControlledInput
          control={control}
          label="Organization Size"
          required
          name="organization_size"
          placeholder="Organization Size"
          containerClasses="basis-[40%] rounded-lg"
          error={!!errors?.organization_size}
          helperText={(errors?.organization_size?.message as string) ?? ""}
        />
      </div>
      <div className="row gap-4">
        <div className="col items-center justify-center p-4 border border-[#B0CAE5] rounded-lg bg-[#E6EEF7]">
          <img src={profilePlaceholder} />
        </div>
        <div className="col gap-2">
          <h6>Logo</h6>
          <div
            className="border-[#0054AA] border rounded-full cursor-pointer"
            onClick={() => {}}
          >
            <p className="text-[#0054AA] px-2 py-1">Upload photo</p>
          </div>
        </div>
      </div>

      <h3 className="font-extrabold text-lg mb-6 mt-9 w-full text-left">
        Organization's Address
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 w-full">
        <ControlledInput
          control={control}
          label="Contact's First Name"
          required
          name="firstName"
          placeholder="Contact's First Name"
          containerClasses="basis-[40%] rounded-lg"
          error={!!errors?.firstName}
          helperText={(errors?.firstName?.message as string) ?? ""}
        />

        <ControlledInput
          control={control}
          label="Contact's Last Name"
          required
          name="lastName"
          placeholder="Contact's Last Name"
          containerClasses="basis-[40%] rounded-lg"
          error={!!errors?.lastName}
          helperText={(errors?.lastName?.message as string) ?? ""}
        />
        <ControlledInput
          control={control}
          label="Email Address"
          required
          name="email_address"
          placeholder="Email Address"
          containerClasses="basis-[40%] rounded-lg"
          error={!!errors?.email_address}
          helperText={(errors?.email_address?.message as string) ?? ""}
        />

        <ControlledInput
          control={control}
          label="Address"
          required
          name="address"
          placeholder="Address"
          containerClasses="basis-[40%] rounded-lg"
          error={!!errors?.address}
          helperText={(errors?.address?.message as string) ?? ""}
        />
        <ControlledInput
          control={control}
          label="City"
          required
          name="city"
          placeholder="City"
          containerClasses="basis-[40%] rounded-lg"
          error={!!errors?.city}
          helperText={(errors?.city?.message as string) ?? ""}
        />
        <ControlledInput
          control={control}
          label="State"
          required
          name="state"
          placeholder="State"
          containerClasses="basis-[40%] rounded-lg"
          error={!!errors?.state}
          helperText={(errors?.state?.message as string) ?? ""}
        />
      </div>
      <ControlledInput
        control={control}
        label="Zip Code"
        required
        name="zip_code"
        placeholder="Zip Code"
        containerClasses="basis-[40%] rounded-lg"
        error={!!errors?.zip_code}
        helperText={(errors?.zip_code?.message as string) ?? ""}
      />
    </>
  );
}
