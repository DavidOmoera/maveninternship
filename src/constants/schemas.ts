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
