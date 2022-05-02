import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";

import { RegisterFormSchema } from "@pages/Auth/form/scheme";

import FormField from "@components/FormField/FormField";

import style from "../../auth.module.scss";

interface IProps {
  goToLogin: () => void;
}

const Register = ({ goToLogin }: IProps) => {
  const form = useForm({
    resolver: yupResolver(RegisterFormSchema),
    mode: "onChange",
  });

  return (
    <FormProvider {...form}>
      <form>
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
