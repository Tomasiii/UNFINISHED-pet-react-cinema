import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { RegisterFormSchema } from "@pages/Auth/form/scheme";

import FormField from "@components/FormField/FormField";

import { register } from "@store/user/user.actions";

import style from "../../auth.module.scss";

interface IProps {
  goToLogin: () => void;
}

interface IRegisterInput {
  fullName: string;
  email: string;
  password: string;
}

const Register = ({ goToLogin }: IProps) => {
  const form = useForm<IRegisterInput>({
    resolver: yupResolver(RegisterFormSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IRegisterInput> = (data) => {
    register(data);
    form.reset();
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h3 className={style.title}>Register</h3>
        <FormField name={"fullName"} label={"Full Name"} />
        <FormField name={"email"} label={"Email"} />
        <FormField name={"password"} label={"Password"} />
        <div className={style.button}>Sign Up</div>
        <div className={style.redirect}>
          <p>Do you have account?</p>
          <p className={style.link} onClick={goToLogin}>
            Login
          </p>
        </div>
      </form>
    </FormProvider>
  );
};

export default Register;
