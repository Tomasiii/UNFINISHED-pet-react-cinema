import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";

import style from "@pages/Auth/auth.module.scss";
import { LoginFormSchema } from "@pages/Auth/form/scheme";

import FormField from "@components/FormField/FormField";

interface IProps {
  goToRegister: () => void;
}

const Login = ({ goToRegister }: IProps) => {
  const form = useForm({
    resolver: yupResolver(LoginFormSchema),
    mode: "onChange",
  });
  return (
    <FormProvider {...form}>
      <form>
        <h3 className={style.title}>Login</h3>
        <FormField name={"email"} label={"Email"} />
        <FormField name={"password"} label={"Password"} />
        <div className={style.button}>Sign In</div>
        <div className={style.redirect}>
          <p>You have not account?</p>
          <p className={style.link} onClick={goToRegister}>
            Register
          </p>
        </div>
      </form>
    </FormProvider>
  );
};

export default Login;
