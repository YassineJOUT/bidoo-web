import * as Yup from "yup";

const validEmail = Yup.string()
  .email("Must be a valid email address")
  .max(255, "Too long for an email");

const validPassword = Yup.string()
  .min(8, "Password must have at least 8 caracters")
  .max(255, "Too long password")
  .required("Password is required");

const validConfirmationCode = Yup.number()
  .test(
    "len",
    "Confirmation code must be a 4 digits number",
    (t) => t && t.toString().length === 4
  )
const validPercentage= Yup.number()
  .test(
    "len",
    "Must be a percentage",
    (t) => t >= 0 && t <= 100
  )
  .positive("Must be positive")

const validUsername = Yup.string()
  .min(3, "Username must have more than 3 caracters")
  .max(50, "Username must have less than 50 caracters")
  .required("Username is required");

const validStr = Yup.string()
  .min(3, "String must have more than 3 caracters")
  .max(200, "String must have less than 50 caracters");

const validUrl = Yup.string().matches(
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
  "Enter correct url!"
);
export const loginValidationSchema = Yup.object().shape({
  email: validEmail.required("Email is required"),
  password: validPassword,
});

export const PassordForgottenValidationSchema = Yup.object().shape({
  email: validEmail.required("Email is required"),
});

export const confirmationCodeFormSchema = Yup.object().shape({
  confirmationCode: validConfirmationCode,
});
export const validPhoneNumber = Yup.number()
.typeError("That doesn't look like a phone number")
.positive("A phone number can't start with a minus")
.integer("A phone number can't include a decimal point")
.max(15)
.required('A phone number is required');

export const resetPasswordSchema = Yup.object().shape({
  password1: validPassword,
  password: Yup.string().oneOf(
    [Yup.ref("password1"), null],
    "Passwords must match"
  ),
});

export const registrationSchema = Yup.object().shape({
  username: validUsername,
  email: validEmail,
  password: validPassword,
});

export const siteValidationSchema = Yup.object().shape({
  siteName: validStr,
  headerText: validStr,
  facebook: validUrl,
  twitter: validUrl,
  youtube: validUrl,
  instagram: validUrl,
  siteMetaTagTitle: validStr,
  siteMetaTagKeyword: validStr,
  siteMetaTagDescription: validStr,
});


export const locationValidationSchema = Yup.object().shape({
  address: validStr,
  city: validStr,
  postCode: validStr,
  country: validStr
});

export const kitchenValidationSchema = Yup.object().shape({
  kitchenName: validStr,
  description: validStr,
});


export const contactValidationSchema = Yup.object().shape({
  supportEmail: validEmail,
  adminEmail: validEmail,
  sitePhone: validPhoneNumber,
  invoiceEmail: validEmail
});

export const taxValidationSchema = Yup.object().shape({
  tax: validPercentage
});

export const commissionValidationSchema = Yup.object().shape({
  commission: validPercentage
});

