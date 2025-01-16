import { object, string, ref } from "yup";

const signupSchema = object({
  confirmPassword: string()
    .oneOf([ref("password")], "Passwords don't match")
    .required("Please confirm the password"),
  password: string()
    .min(8, "The password should have at least 8 characters")
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "The password should have at least one uppercase letter, one lowercase letter and one number"
    ),
  email: string().email("The email is not valid").required("Email is required"),
});

export default signupSchema;
