import * as yup from "yup";
import yupPassword from "yup-password";

yupPassword(yup); // extend yup

export const LoginFormSchema = yup.object().shape({
  email: yup.string().email("Неверная почта").required("Почта обязательная"),
  password: yup.string().password().required("Пароль обязательный"),
});

export const RegisterFormSchema = yup
  .object()
  .shape({
    fullName: yup.string().required("Имя и фамилия обязательны"),
  })
  .concat(LoginFormSchema);
