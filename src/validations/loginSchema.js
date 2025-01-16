import { object, string } from "yup";

const loginSchema = object({
  password: string()
    .min(8, "The password should have at least 8 characters")
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "The password should have at least one uppercase letter, one lowercase letter and one number"
    ),
  email: string().email("The email is not valid").required("Email is required"),
});

export default loginSchema;
