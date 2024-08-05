import React from "react";
import { PaymentDetails } from "components/pages/AccountSetup";
import { ControlledInput } from "./ControlledInput";
import { Control, FieldErrors } from "react-hook-form";
import visaLogo from "../../assets/visa_logo.svg";

type PaymentDetailsProps = {
  control: Control<PaymentDetails, any>;
  errors: FieldErrors<PaymentDetails>;
};

export const Payment: React.FC<PaymentDetailsProps> = ({ control, errors }) => {
  return (
    <div className="px-2 pb-2">
      <div className="flex justify-between mb-8 -mt-4">
        <h2 className="text-2xl font-extrabold">Payment</h2>
        <div className="text-right text-2xl font-extrabold">$0,000</div>
      </div>

      <div>
        <h3 className="font-bold text-xl">Card Details</h3>
        <div>
          <h4 className="text-sm font-semibold mt-4">Card Number</h4>
          <div className="flex">
            {/* <img
              src=
              alt="bank logo"
              className="border border-gray-300 h-14 p-4 border-r-0 mt-3 rounded"
            /> */}
            <ControlledInput
              control={control}
              leftIcon={visaLogo}
              name="cardNumber"
              placeholder="XXXX  XXXX  XXX  2347"
              containerClasses="w-full rounded-lg my-3"
              error={!!errors?.cardNumber}
              helperText={(errors?.cardNumber?.message as string) ?? ""}
            />
          </div>
          <div className="flex justify-between gap-4">
            <ControlledInput
              control={control}
              name="cardHolderName"
              placeholder="Card Holder's Name"
              containerClasses="w-full rounded-lg my-3"
              error={!!errors?.cardHolderName}
              helperText={(errors?.cardHolderName?.message as string) ?? ""}
            />
            <ControlledInput
              control={control}
              name="expiryDate"
              placeholder="Expiry Date"
              containerClasses="w-full rounded-lg my-3"
              error={!!errors?.expiryDate}
              helperText={(errors?.expiryDate?.message as string) ?? ""}
            />
            <ControlledInput
              control={control}
              name="cvv"
              placeholder="CVV"
              containerClasses="w-full rounded-lg my-3"
              error={!!errors?.cvv}
              helperText={(errors?.cvv?.message as string) ?? ""}
            />
          </div>

          <h2 className="font-bold text-xl mt-8">Billing Address</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <ControlledInput
              control={control}
              name="phoneNumber"
              placeholder="Phone Number"
              error={!!errors?.phoneNumber}
              helperText={(errors?.phoneNumber?.message as string) ?? ""}
            />
            <ControlledInput
              control={control}
              name="address"
              placeholder="Address"
              error={!!errors?.address}
              helperText={(errors?.address?.message as string) ?? ""}
            />
            <ControlledInput
              control={control}
              name="organizationSize"
              placeholder="Organisation Size"
              error={!!errors?.organizationSize}
              helperText={(errors?.organizationSize?.message as string) ?? ""}
            />
            <ControlledInput
              control={control}
              name="zipCode"
              placeholder="Zip Code"
              error={!!errors?.zipCode}
              helperText={(errors?.zipCode?.message as string) ?? ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
