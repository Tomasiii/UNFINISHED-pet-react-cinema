import * as yup from "yup";
import yupPassword from "yup-password";

yupPassword(yup); // extend yup

export const LoginFormSchema = yup.object().shape({
  email: yup.string().email("Incorrect email").required("Email is required"),
  // password: yup.string().password().required("Пароль обязательный"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Min 6 symbols"),
});

export const RegisterFormSchema = yup
  .object()
  .shape({
    fullName: yup.string().required("Full name is required"),
  })
  .concat(LoginFormSchema);
