import { PageContainer } from "components/templates/PageContainer";
import profilePicture from "assets/profile_picture_large.png";
import photo from "assets/photo.svg";
import envelope from "assets/envelope2.svg";
import phone from "assets/phone.svg";
import chevronRight from "assets/chevron_right.svg";
import mastercard from "assets/mastercard.svg";
import pencil from "assets/pencil.svg";
import successCheck from "assets/success_check.svg";
import orgLogo from "assets/org_logo.png";
import visaLogo from "assets/visa_logo.svg";
import { Pill } from "components/molecules/Pill";
import { CoterieBot } from "assets/CoterieBot";
import { colors } from "constants/common";
import { Button } from "components/atoms/Button";
import {
  ControlledSelect,
  TTControlledSelectProps,
} from "components/organisms/ControlledSelect";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  feedbackSchema,
  orgContactSchema,
  orgDetailsSchema,
  changePasswordSchema,
  editProfileSchema,
  managePaymentMethodSchema,
} from "constants/schemas";
import { useState } from "react";
import { Dialog, IconButton } from "@mui/material";
import { ArrowRight } from "assets/ArrowRight";
import { ControlledInput } from "components/organisms/ControlledInput";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Checkbox from "@mui/material/Checkbox";

const CONTACT_DETAILS = [
  { icon: envelope, text: "09090909090" },
  { icon: phone, text: "anitalever@greenfelder.com" },
];

const ORG_DETAILS = [
  { title: "Organization Name", description: "Greenfeld Group" },
  { title: "Industry", description: "Legal" },
  { title: "Business Type", description: "Consultant" },
  { title: "Organization Size", description: "50 - 100" },
];

const ORG_CONTACTS = [
  { title: "Contact's Name", description: "Rudy Bayer" },
  { title: "Email Address", description: "bayer@greenfelder.com" },
  { title: "Address", description: "77164 Robin Drive, Dalla, Carlifonia" },
  { title: "Zip Code", description: "86517-3971" },
];

const ISSUES_OPTIONS = [
  { id: 1, label: "Issue 1", value: "issue1" },
  { id: 2, label: "Issue 2", value: "issue2" },
  { id: 3, label: "Issue 3", value: "issue3" },
  { id: 4, label: "Issue 4", value: "issue4" },
  { id: 5, label: "Issue 5", value: "issue5" },
  { id: 6, label: "Issue 6", value: "issue6" },
  { id: 7, label: "Issue 7", value: "issue7" },
  { id: 8, label: "Issue 8", value: "issue8" },
  { id: 9, label: "Issue 9", value: "issue9" },
];

const DURATION_OPTIONS = [
  { id: 1, label: "Less than a year", value: "less_than_year" },
  { id: 2, label: "1-5 years", value: "5_years" },
  { id: 3, label: "A long time", value: "indefinite" },
];

const INTEREST_OPTIONS = [
  { id: 1, label: "Yes", value: "yes" },
  { id: 1, label: "Not at the moment", value: "no" },
];

function Info({ title, description }: { title: string; description: string }) {
  return (
    <article className="col items-start gap-2">
      <h6 className="text-neutral950">{title}</h6>
      <p className="text-neutral500">{description}</p>
    </article>
  );
}

function FeedbackSelect({ label, ...props }: TTControlledSelectProps) {
  return (
    <div className="col gap-2 items-start">
      <h6 className="text-neutral950">{label}</h6>
      <ControlledSelect {...props} />
    </div>
  );
}

type TFeedbackForm = {
  issues: string;
  duration: string;
  option: string;
};

type TOrgDetailsForm = {
  organization_name: string;
  industry: string;
  business_type: string;
  organization_size: string;
};

type TOrgContactForm = {
  contact_name: string;
  email_address: string;
  address: string;
  zip_code: string;
};

type TChangePasswordForm = {
  current_password: string;
  new_password: string;
  confirm_password: string;
};

type TEditProfileForm = {
  first_name: string;
  last_name: string;
  phone_number: string;
  email_address: string;
};

type TManagePaymentMethodForm = {
  card_number: string;
  expiry_date: string;
  cvv: string;
  card_holder_name: string;
};

export function Profile() {
  const [showFeedbackSuccess, setFeedbackSuccess] = useState<boolean>(false);
  const [showOrganizationDetailsForm, setShowOrganizationDetailsForm] =
    useState<boolean>(false);
  const [showOrganizationContactForm, setShowOrganizationContactForm] =
    useState<boolean>(false);
  const [showChangePasswordForm, setShowChangePasswordForm] =
    useState<boolean>(false);
  const [showEditProfileForm, setShowEditProfileForm] =
    useState<boolean>(false);
  const [showManagePaymentMethodForm, setShowManagePaymentMethodForm] =
    useState(false);

  const {
    control: feedbackControl,
    handleSubmit: handleFeedbackFormSubmit,
    formState: { errors: feedbackFormErrors, isValid: isFeedbackFormValid },
  } = useForm<TFeedbackForm>({
    resolver: yupResolver(feedbackSchema),
  });

  const {
    control: orgDetailsControl,
    handleSubmit: handleOrgDetailsSubmit,
    formState: { errors: orgDetailsErrors, isValid: isOrgDetailsFormValid },
  } = useForm<TOrgDetailsForm>({
    resolver: yupResolver(orgDetailsSchema),
  });

  const {
    control: orgContactControl,
    handleSubmit: handleOrgContactSubmit,
    formState: { errors: orgContactErrors, isValid: isOrgContactFormValid },
  } = useForm<TOrgContactForm>({
    resolver: yupResolver(orgContactSchema),
  });

  const {
    control: changePasswordControl,
    handleSubmit: handleChangePasswordSubmit,
    formState: {
      errors: changePasswordErrors,
      isValid: isChangePasswordFormValid,
    },
  } = useForm<TChangePasswordForm>({
    resolver: yupResolver(changePasswordSchema),
  });

  const {
    control: EditProfileControl,
    handleSubmit: handleEditProfileSubmit,
    formState: { errors: EditProfileErrors, isValid: isEditProfileFormValid },
  } = useForm<TEditProfileForm>({
    resolver: yupResolver(editProfileSchema),
  });

  const {
    control: ManagePaymentMethodControl,
    handleSubmit: handleManagePaymentMethodSubmit,
    formState: {
      errors: ManagePaymentMethodErrors,
      isValid: isManagePaymentMethodFormValid,
    },
  } = useForm<TManagePaymentMethodForm>({
    resolver: yupResolver(managePaymentMethodSchema),
  });

  function onClickChangePhoto() {}
  function onClickEditProfile() {
    setShowEditProfileForm(true);
  }
  function onClickChangePassword() {
    setShowChangePasswordForm(true);
  }
  function onClickChangePlan() {}
  function onClickManagePaymentMethod() {
    setShowManagePaymentMethodForm(true);
  }
  function onClickEditOrgDetails() {
    setShowOrganizationDetailsForm(true);
  }

  function onClickEditOrgContact() {
    setShowOrganizationContactForm(true);
  }

  function onCloseFeedbackSuccess() {
    setFeedbackSuccess(false);
  }

  function onCloseOrganizationDetailsForm() {
    setShowOrganizationDetailsForm(false);
  }
  function onCloseOrganizationContactForm() {
    setShowOrganizationContactForm(false);
  }

  const onSubmitFeedbackForm: SubmitHandler<TFeedbackForm> = (
    formData: TFeedbackForm
  ) => {
    console.log("feedback", formData);
    if (isFeedbackFormValid) setFeedbackSuccess(true);
  };

  const onSaveOrgDetails: SubmitHandler<TOrgDetailsForm> = (
    formData: TOrgDetailsForm
  ) => {
    console.log("org details", formData);
    if (isOrgDetailsFormValid) setShowOrganizationDetailsForm(false);
  };

  const onSaveOrgContact: SubmitHandler<TOrgContactForm> = (
    formData: TOrgContactForm
  ) => {
    console.log("org contact", formData);
    if (isOrgContactFormValid) setShowOrganizationContactForm(false);
  };

  const onSaveChangePassword: SubmitHandler<TChangePasswordForm> = (
    formData: TChangePasswordForm
  ) => {
    console.log("change password", formData);
    if (isChangePasswordFormValid) setShowChangePasswordForm(false);
  };

  const onSaveEditProfile: SubmitHandler<TEditProfileForm> = (
    formData: TEditProfileForm
  ) => {
    console.log("edit profile", formData);
    if (isEditProfileFormValid) setShowEditProfileForm(false);
  };

  const onSaveManagePaymentMethod: SubmitHandler<TManagePaymentMethodForm> = (
    formData: TManagePaymentMethodForm
  ) => {
    console.log("manage payment method", formData);
    if (isManagePaymentMethodFormValid) setShowManagePaymentMethodForm(false);
  };

  return (
    <PageContainer title="Profile">
      <div className="grid grid-cols-2 gap-6 mx-9">
        <section className="col gap-5 p-9 rounded-xl bg-white">
          <h4 className="text-neutral950">Personal Details</h4>
          <div className="row items-center gap-4">
            <img src={profilePicture} className="w-20 h-20" />
            <div className="col items-start gap-2">
              <h6 className="text-neutral950">Profile Photo</h6>
              <Pill
                text="Change Photo"
                containerClassName="row items-center rounded-[2.37rem] px-3 py-2 gap-1 bg-neutral50 cursor-pointer"
                rightIcon={<img src={photo} className="w-3 h-3" />}
                onClick={onClickChangePhoto}
              />
            </div>
          </div>
          <div className="col p-6 gap-4 items-start bg-neutral50">
            <div className="row justify-between w-full">
              <h2 className="text-neutral950">Anita Lever</h2>
              <div
                className="row gap-1 items-center cursor-pointer"
                onClick={onClickEditProfile}
              >
                <img src={pencil} className="w-3 h-3" />
                <p className="text-primary font-medium">Edit Details</p>
              </div>
            </div>
            <div className="col gap-2">
              {CONTACT_DETAILS.map((contact) => (
                <div className="row gap-3" key={contact.text}>
                  <img src={contact.icon} className="w-4 h-4" />
                  <p>{contact.text}</p>
                </div>
              ))}
            </div>
          </div>
          <h6
            className="text-primary cursor-pointer"
            onClick={onClickChangePassword}
          >
            Change Password
          </h6>
        </section>
        <section className="col gap-5 p-9 rounded-xl bg-white">
          <div className="row justify-between w-full">
            <h4 className="text-neutral950">Your Plan</h4>
            <Pill text="Member since August 2024" />
          </div>
          <div className="col gap-3">
            <CoterieBot color={colors.error} />
            <h2 className="text-black">Regulatory AI</h2>
            <span className="row items-center gap-1">
              <p className="text-neutral500">Next payment:</p>
              <h6 className="text-neutral500">24 August, 2025</h6>
            </span>
          </div>
          <Button
            text="Change Plan"
            onClick={onClickChangePlan}
            className="my-6 w-[135px]"
          />

          <hr className="bg-neutral100" />

          <div className="row justify-between w-full">
            <div className="row gap-2 items-center">
              <img src={mastercard} className="w-8 h-8" />
              <h5 className="">
                &#183;&#183;&#183;&#183; &#183;&#183;&#183;&#183;
                &#183;&#183;&#183;&#183; 9044
              </h5>
            </div>
            <div
              className="row gap-2 items-center cursor-pointer"
              onClick={onClickManagePaymentMethod}
            >
              <h6 className="text-primary">Manage Payment Method</h6>
              <img src={chevronRight} className="w-1 h-2" />
            </div>
          </div>
        </section>
        <section className="p-9 rounded-xl bg-white">
          <div className="row justify-between">
            <h4 className="text-neutral950">Organization Details</h4>
            <div
              className="row gap-1 items-center cursor-pointer"
              onClick={onClickEditOrgDetails}
            >
              <img src={pencil} className="w-3 h-3" />
              <p className="text-primary font-medium">Edit Details</p>
            </div>
          </div>
          <div className="row items-center gap-4 my-5">
            <img src={orgLogo} className="w-20 h-20" />
            <div className="col items-start gap-2">
              <h6 className="text-neutral950">Organization Logo</h6>
              <Pill
                text="Change Photo"
                containerClassName="row items-center rounded-[2.37rem] px-3 py-2 gap-1 bg-neutral50 cursor-pointer"
                rightIcon={<img src={photo} className="w-3 h-3" />}
                onClick={onClickChangePhoto}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 mt-5 gap-5">
            {ORG_DETAILS.map((details) => (
              <Info key={details.title + details.description} {...details} />
            ))}
          </div>
          <div className="mt-6">
            <div className="row justify-between">
              <h4 className="text-neutral950">Organization Contact</h4>
              <div
                className="row gap-1 items-center cursor-pointer"
                onClick={onClickEditOrgContact}
              >
                <img src={pencil} className="w-3 h-3" />
                <p className="text-primary font-medium">Edit Details</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-5">
              {ORG_CONTACTS.map((contact) => (
                <Info key={contact.description + contact.title} {...contact} />
              ))}
            </div>
          </div>
        </section>
        <section className="p-9 rounded-xl bg-white">
          <h4 className="text-neutral950">Organization Details</h4>

          <hr className="bg-neutral100 mt-3" />

          <div className="col gap-6 p-6 my-9 bg-neutral50 rounded-xl">
            <FeedbackSelect
              control={feedbackControl}
              name="issues"
              defaultValue=""
              label="What issues are important for you to track?"
              options={ISSUES_OPTIONS}
              helperText={feedbackFormErrors.issues?.message as string}
            />
            <FeedbackSelect
              control={feedbackControl}
              name="duration"
              defaultValue=""
              label="How long have you been tracking legislative bills?"
              options={DURATION_OPTIONS}
              helperText={feedbackFormErrors.duration?.message as string}
            />
            <FeedbackSelect
              control={feedbackControl}
              name="option"
              defaultValue=""
              label="Would you be interested in learning more about Coterie Legislative AI?"
              options={INTEREST_OPTIONS}
              helperText={feedbackFormErrors.option?.message as string}
            />
          </div>

          <Button
            text="Submit"
            className="w-full"
            onClick={handleFeedbackFormSubmit(onSubmitFeedbackForm)}
          />
        </section>
      </div>
      <Dialog
        open={showOrganizationDetailsForm}
        onClose={onCloseOrganizationDetailsForm}
        fullWidth
      >
        <div className="col gap-6 p-9">
          <div className="row justify-between pb-3 border-b border-neutral50">
            <h3 className="text-neutral950">Edit Organization Details</h3>
            <IconButton onClick={onCloseOrganizationDetailsForm}>
              <CloseOutlinedIcon />
            </IconButton>
          </div>
          <div className="col gap-6">
            <ControlledInput
              control={orgDetailsControl}
              name="organization_name"
              label="Organization Name"
              required
              placeholder="Organization Name"
              error={!!orgDetailsErrors?.organization_name}
              helperText={
                (orgDetailsErrors?.organization_name?.message as string) ?? ""
              }
            />
            <ControlledInput
              control={orgDetailsControl}
              name="industry"
              label="Industry"
              required
              placeholder="Industry"
              error={!!orgDetailsErrors?.industry}
              helperText={(orgDetailsErrors?.industry?.message as string) ?? ""}
            />
            <ControlledInput
              control={orgDetailsControl}
              name="business_type"
              label="Business Type"
              required
              placeholder="Business Type"
              error={!!orgDetailsErrors?.business_type}
              helperText={
                (orgDetailsErrors?.business_type?.message as string) ?? ""
              }
            />
            <ControlledInput
              control={orgDetailsControl}
              name="organization_size"
              label="Organization Size"
              required
              placeholder="Organization Size"
              error={!!orgDetailsErrors?.organization_size}
              helperText={
                (orgDetailsErrors?.organization_size?.message as string) ?? ""
              }
            />
          </div>
          <div className="row justify-end">
            <Button
              text="Save Changes"
              onClick={handleOrgDetailsSubmit(onSaveOrgDetails)}
            />
          </div>
        </div>
      </Dialog>
      <Dialog
        open={showOrganizationContactForm}
        onClose={onCloseOrganizationContactForm}
        fullWidth
      >
        <div className="col gap-6 p-9 w-full">
          <div className="row justify-between pb-3 border-b border-neutral50">
            <h3 className="text-neutral950">Edit Organization Contact</h3>
            <IconButton onClick={onCloseOrganizationContactForm}>
              <CloseOutlinedIcon />
            </IconButton>
          </div>
          <div className="col gap-6">
            <ControlledInput
              control={orgContactControl}
              name="contact_name"
              label="Contact's Name"
              required
              placeholder="Contact name"
              error={!!orgContactErrors?.contact_name}
              helperText={
                (orgContactErrors?.contact_name?.message as string) ?? ""
              }
            />
            <ControlledInput
              control={orgContactControl}
              name="email_address"
              label="Email Addresss"
              required
              placeholder="Email Address"
              error={!!orgContactErrors?.email_address}
              helperText={
                (orgContactErrors?.email_address?.message as string) ?? ""
              }
            />
            <ControlledInput
              control={orgContactControl}
              name="address"
              label="Address"
              required
              placeholder="Address"
              error={!!orgContactErrors?.address}
              helperText={(orgContactErrors?.address?.message as string) ?? ""}
            />
            <ControlledInput
              control={orgContactControl}
              name="zip_code"
              label="Zip Code"
              required
              placeholder="Zip Code"
              error={!!orgContactErrors?.zip_code}
              helperText={(orgContactErrors?.zip_code?.message as string) ?? ""}
            />
          </div>
          <div className="row justify-end">
            <Button
              text="Save Changes"
              onClick={handleOrgContactSubmit(onSaveOrgContact)}
            />
          </div>
        </div>
      </Dialog>
      <Dialog
        open={showFeedbackSuccess}
        onClose={onCloseFeedbackSuccess}
        sx={{ borderRadius: "24px" }}
      >
        <div className="col items-center gap-6 p-16">
          <img src={successCheck} className="w-36 h-36" />
          <article className="col gap-3 items-center">
            <h2 className="text-neutral950 text-center">
              Feedback Sent Successfully
            </h2>
            <p className="text-neutral500 text-center">
              Thank you for your feedback. This would help us improve your
              experience on Coterie AI.
            </p>
          </article>
          <Button
            text="Done"
            onClick={onCloseFeedbackSuccess}
            rightIcon={<ArrowRight />}
          />
        </div>
      </Dialog>
      <Dialog
        open={showChangePasswordForm}
        onClose={() => setShowChangePasswordForm(false)}
        fullWidth
      >
        <div className="col gap-6 p-9 w-full">
          <div className="row justify-between pb-3 border-b border-neutral50">
            <h3 className="text-neutral950">Change Password</h3>
            <IconButton onClick={() => setShowChangePasswordForm(false)}>
              <CloseOutlinedIcon />
            </IconButton>
          </div>
          <div className="col gap-6">
            <ControlledInput
              control={changePasswordControl}
              name="current_password"
              label="Current Password"
              type="password"
              required
              placeholder="Current Password"
              error={!!changePasswordErrors?.current_password}
              helperText={
                (changePasswordErrors?.current_password?.message as string) ??
                ""
              }
            />
            <ControlledInput
              control={changePasswordControl}
              name="new_password"
              label="New Password"
              type="password"
              required
              placeholder="New Password"
              error={!!changePasswordErrors?.new_password}
              helperText={
                (changePasswordErrors?.new_password?.message as string) ?? ""
              }
            />
            <ControlledInput
              control={changePasswordControl}
              name="confirm_password"
              label="Confirm New Password"
              type="password"
              required
              placeholder="Confirm New Password"
              error={!!changePasswordErrors?.confirm_password}
              helperText={
                (changePasswordErrors?.confirm_password?.message as string) ??
                ""
              }
            />
          </div>
          <div className="row justify-end">
            <Button
              text="Save Changes"
              onClick={handleChangePasswordSubmit(onSaveChangePassword)}
            />
          </div>
        </div>
      </Dialog>

      <Dialog
        open={showEditProfileForm}
        onClose={() => setShowEditProfileForm(false)}
        fullWidth
      >
        <div className="col gap-6 p-9 w-full">
          <div className="row justify-between pb-3 border-b border-neutral50">
            <h3 className="text-neutral950">Edit Your Details</h3>
            <IconButton onClick={() => setShowEditProfileForm(false)}>
              <CloseOutlinedIcon />
            </IconButton>
          </div>
          <div className="col gap-6">
            <ControlledInput
              name="first_name"
              control={EditProfileControl}
              placeholder="First Name"
              label="First Name"
              type="text"
              required
              error={!!EditProfileErrors?.first_name}
              helperText={
                (EditProfileErrors?.first_name?.message as string) ?? ""
              }
            />
            <ControlledInput
              name="last_name"
              control={EditProfileControl}
              placeholder="Last Name"
              label="Last Name"
              type="text"
              required
              error={!!EditProfileErrors?.last_name}
              helperText={
                (EditProfileErrors?.last_name?.message as string) ?? ""
              }
            />
            <ControlledInput
              name="phone_number"
              control={EditProfileControl}
              placeholder="Phone Number"
              label="Phone Number"
              type="text"
              required
              error={!!EditProfileErrors?.phone_number}
              helperText={
                (EditProfileErrors?.phone_number?.message as string) ?? ""
              }
            />
            <ControlledInput
              name="email_address"
              control={EditProfileControl}
              placeholder="Email Address"
              label="Email Address"
              type="email"
              required
              error={!!EditProfileErrors?.email_address}
              helperText={
                (EditProfileErrors?.email_address?.message as string) ?? ""
              }
            />
          </div>
          <div className="row justify-end">
            <Button
              text="Save Changes"
              onClick={handleEditProfileSubmit(onSaveEditProfile)}
            />
          </div>
        </div>
      </Dialog>

      <Dialog
        open={showManagePaymentMethodForm}
        onClose={() => setShowManagePaymentMethodForm(false)}
        fullWidth
      >
        <div className="col gap-6 p-9 w-full">
          <div className="row justify-between pb-3 border-b border-neutral50">
            <h3 className="text-neutral950">Manage Payment Method</h3>
            <IconButton onClick={() => setShowManagePaymentMethodForm(false)}>
              <CloseOutlinedIcon />
            </IconButton>
          </div>
          <h5 className="text-neutral950 mt-9 mb-6">Card Details</h5>
          <div className="col gap-6">
            <div className="relative">
              <img
                src={visaLogo}
                alt="Visa"
                className="absolute left-4 top-4 h-6"
              />
              <ControlledInput
                name="card_number"
                control={ManagePaymentMethodControl}
                placeholder="Card Number"
                label="Card Number"
                type="text"
                required
                error={!!ManagePaymentMethodErrors?.card_number}
                helperText={
                  (ManagePaymentMethodErrors?.card_number?.message as string) ??
                  ""
                }
                className="pl-16" // Adjust padding to make space for the Visa logo
              />
            </div>
            <div className="row gap-6">
              <ControlledInput
                name="expiry_date"
                control={ManagePaymentMethodControl}
                placeholder="MM/YY"
                label="Expiry Date"
                type="text"
                required
                error={!!ManagePaymentMethodErrors?.expiry_date}
                helperText={
                  (ManagePaymentMethodErrors?.expiry_date?.message as string) ??
                  ""
                }
                className="w-1/2" // Adjust width as needed
              />
              <ControlledInput
                name="cvv"
                control={ManagePaymentMethodControl}
                placeholder="CVV"
                label="CVV"
                type="text"
                required
                error={!!ManagePaymentMethodErrors?.cvv}
                helperText={
                  (ManagePaymentMethodErrors?.cvv?.message as string) ?? ""
                }
                className="w-1/2" // Adjust width as needed
              />
            </div>
            <ControlledInput
              name="card_holder_name"
              control={ManagePaymentMethodControl}
              placeholder="Card Holder's Name"
              label="Card Holder's Name"
              type="text"
              required
              error={!!ManagePaymentMethodErrors?.card_holder_name}
              helperText={
                (ManagePaymentMethodErrors?.card_holder_name
                  ?.message as string) ?? ""
              }
            />
          </div>
          <div>
            <p className="text-neutral600">
              By checking the checkbox below, you agree that Legislative AI will
              automatically continue your membership and charge the membership
              fee (currently $1,000/month) to your payment method until you
              cancel. You may cancel at any time to avoid future charges.
            </p>
            <div className="row items-center mt-4">
              <Checkbox id="agree" name="agree" className="mr-2" />
              <label htmlFor="agree" className="text-neutral950">
                I agree
              </label>
            </div>
          </div>
          <div className="row justify-end mt-6">
            <Button
              text="Save Payment Method"
              onClick={handleManagePaymentMethodSubmit(
                onSaveManagePaymentMethod
              )}
            />
          </div>
        </div>
      </Dialog>
    </PageContainer>
  );
}
