import { memo, useState } from "react";
import { useFormContext } from "react-hook-form";

import hidePasswordImg from "@assets/hidePassword.jpg";
import showPasswordImg from "@assets/showPassword.png";

import style from "./form-field.module.scss";

interface FormFieldProps {
  name: string;
  label: string;
}

const FormField = ({ name, label }: FormFieldProps) => {
  const { register, formState } = useFormContext();
  const [isHidePass, setHidePass] = useState(true);
  return (
    <>
      <p>{label}</p>
      <div className={style.field}>
        <input
          {...register(name)}
          placeholder={label}
          type={name === "password" && isHidePass ? "password" : "text"}
        />
        {name === "password" ? (
          isHidePass ? (
            <img
              onClick={() => setHidePass(false)}
              src={showPasswordImg}
              alt=""
            />
          ) : (
            <img
              onClick={() => setHidePass(true)}
              src={hidePasswordImg}
              alt=""
            />
          )
        ) : null}
      </div>

      <div className={style.errorText}>
        {!!formState.errors[name]?.message
          ? formState.errors[name]?.message
          : null}
      </div>
    </>
  );
};

export default memo(FormField);
