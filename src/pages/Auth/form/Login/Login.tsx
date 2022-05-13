import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import style from "@pages/Auth/auth.module.scss";
import { LoginFormSchema } from "@pages/Auth/form/scheme";

import FormField from "@components/FormField/FormField";

import { login } from "@store/user/user.actions";

import { useAppDispatch } from "@hooks/hooksHelpers";

interface IProps {
  goToRegister: () => void;
}

interface ILoginInput {
  email: string;
  password: string;
}

const Login = ({ goToRegister }: IProps) => {
  const dispatch = useAppDispatch();

  const form = useForm<ILoginInput>({
    resolver: yupResolver(LoginFormSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ILoginInput> = (data) => {
    dispatch(login(data));
    form.reset();
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h3 className={style.title}>Login</h3>
        <FormField name={"email"} label={"Email"} />
        <FormField name={"password"} label={"Password"} />
        <button className={style.button}>Sign In</button>
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
