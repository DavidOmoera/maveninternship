import * as yup from "yup";

export const billSearchSchema = yup.object().shape({
  searchValue: yup
    .string()
    .trim()
    .required("Please enter a keyword to begin your search"),
  chamber: yup.string().trim(),
  billType: yup.string().trim(),
  billStatus: yup.string().trim(),
  year: yup.string().trim(),
});

export const activitySearchSchema = yup.object().shape({
  searchValue: yup.string().trim(),
  activity: yup.string().trim(),
  noOfDays: yup.string().trim(),
});

export const feedbackSchema = yup.object().shape({
  issues: yup.string().trim().required("Please select an issue"),
  duration: yup.string().trim().required("Please choose a duration"),
  option: yup.string().trim().required("Please select an option"),
});

export const orgDetailsSchema = yup.object().shape({
  organization_name: yup
    .string()
    .trim()
    .required("Please state the organization name"),
  industry: yup.string().trim().required("Please state the industry type"),
  business_type: yup.string().trim().required("Please state the business type"),
  organization_size: yup
    .string()
    .trim()
    .required("Please state the size of the organization"),
});

export const orgContactSchema = yup.object().shape({
  contact_name: yup.string().trim().required("Please enter contact name"),
  email_address: yup
    .string()
    .trim()
    .email()
    .required("Please enter email address"),
  address: yup.string().trim().required("Please enter address"),
  zip_code: yup
    .string()
    .trim()
    .test({
      name: "zip-validation",
      test: function (value) {
        if (!value || value.length === 0) {
          return true;
        }
        return /^\d{5}(-\d{4})?$/.test(value);
      },
      message: "Enter a valid zip code",
    })
    .required(),
});

export const aboutUserSchema = yup.object().shape({
  firstName: yup.string().trim().required("Please enter your first name"),
  lastName: yup.string().trim().required("Please enter your last name"),
  industryAffiliation: yup
    .string()
    .trim()
    .required("Please enter your industry affiliation"),
  industrySize: yup.string().trim().required("Please enter your industry size"),
});

export const changePasswordSchema = yup.object().shape({
  current_password: yup
    .string()
    .trim()
    .min(6, "Password must be at least 6 characters long")
    .required("Please enter your current password"),
  new_password: yup
    .string()
    .trim()
    .min(6, "New password must be at least 6 characters long")
    .required("Please enter a new password"),
  confirm_password: yup
    .string()
    .trim()
    .oneOf([yup.ref("new_password")], "Passwords must match")
    .required("Please confirm your new password"),
});

export const editProfileSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  phone_number: yup.string().required("Phone number is required"),
  email_address: yup
    .string()
    .email("Invalid email address")
    .required("Email address is required"),
});

export const managePaymentMethodSchema = yup.object().shape({
  card_number: yup
    .string()
    .required("Card number is required")
    .matches(/^\d{16}$/, "Card number must be 16 digits"),
  expiry_date: yup
    .string()
    .required("Expiry date is required")
    .matches(
      /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
      "Expiry date must be in MM/YY format"
    ),
  cvv: yup
    .string()
    .required("CVV is required")
    .matches(/^\d{3}$/, "CVV must be 3 digits"),
  card_holder_name: yup.string().required("Card holder's name is required"),
});

export const aboutOrgSchema = yup.object().shape({
  organization_name: yup
    .string()
    .trim()
    .required("Please state the organization name"),
  industry: yup.string().trim().required("Please state the industry type"),
  business_type: yup.string().trim().required("Please state the business type"),
  organization_size: yup
    .string()
    .trim()
    .required("Please state the size of the organization"),
  firstName: yup.string().trim().required("Please enter contact's first name"),
  lastName: yup.string().trim().required("Please enter contact's last name"),
  email_address: yup
    .string()
    .trim()
    .email()
    .required("Please enter email address"),
  address: yup.string().trim().required("Please enter address"),
  city: yup.string().trim().required("Please enter city"),
  state: yup.string().trim().required("Please enter state"),
  zip_code: yup
    .string()
    .trim()
    .test({
      name: "zip-validation",
      test: function (value) {
        if (!value || value.length === 0) {
          return true;
        }
        return /^\d{5}(-\d{4})?$/.test(value);
      },
      message: "Enter a valid zip code",
    })
    .required(),
});

export const paymentSchema = yup.object().shape({
  cardNumber: yup
    .string()
    .trim()
    .matches(/^[0-9]{16}$/, "Card number must be 16 digits")
    .required("Please enter the card number"),
  cardHolderName: yup
    .string()
    .trim()
    .required("Please enter the card holder's name"),
  expiryDate: yup
    .string()
    .trim()
    .matches(
      /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
      "Expiry date must be in MM/YY or MM/YYYY format"
    )
    .required("Please enter the expiry date"),
  cvv: yup
    .string()
    .trim()
    .matches(/^[0-9]{3,4}$/, "CVV must be 3 or 4 digits")
    .required("Please enter the CVV"),
  phoneNumber: yup
    .string()
    .trim()
    .matches(/^[0-9]{10,15}$/, "Phone number must be between 10 and 15 digits")
    .required("Please enter the phone number"),
  address: yup.string().trim().required("Please enter the address"),
  organizationSize: yup
    .string()
    .trim()
    .required("Please state the size of the organization"),
  zipCode: yup
    .string()
    .trim()
    .matches(/^\d{5}(-\d{4})?$/, "Zip code must be between 5 and 10 digits")
    .required("Please enter the zip code"),
});

export const helpAndSupportSchema = yup.object().shape({
  first_name: yup.string().trim().required("Please enter your first name"),
  last_name: yup.string().trim().required("Please enter your last name"),
  email_address: yup
    .string()
    .trim()
    .email()
    .required("Please enter your email address"),
  company_name: yup.string().trim(),
  issue: yup.string().trim(),
  message: yup.string().trim().required("Please enter your message"),
});

export const signUpSchema = yup.object().shape({
  first_name: yup.string().trim().required("Please enter your first name"),
  last_name: yup.string().trim().required("Please enter your last name"),
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .trim()
    .min(6, "Password must be at least 6 characters long")
    .required("Please enter a password"),
  confirm_password: yup
    .string()
    .trim()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address")
    .required("Please enter your email address"),
  password: yup.string().trim().required("Please enter a password"),
});

export const initiateResetPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address")
    .required("Please enter your email address"),
});

export const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .trim()
    .min(6, "Password must be at least 6 characters long")
    .required("Please enter a password"),
  confirm_password: yup
    .string()
    .trim()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});
