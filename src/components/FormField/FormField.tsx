import { memo, useState } from "react";
import { useFormContext } from "react-hook-form";

import AntIcon from "@components/Icon/AntIcon";

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
      <p className={style.title}>{label}</p>
      <div className={style.field}>
        <input
          {...register(name)}
          placeholder={label}
          type={name === "password" && isHidePass ? "password" : "text"}
          className={name === "password" ? style.inputPassword : ""}
        />
        {name === "password" ? (
          isHidePass ? (
            <AntIcon
              icon="AiFillEye"
              className={style.passwordEye}
              onClick={() => setHidePass(false)}
            />
          ) : (
            <AntIcon
              icon="AiFillEyeInvisible"
              className={style.passwordEye}
              onClick={() => setHidePass(true)}
            />
          )
        ) : null}
      </div>

      <div className={style.errorText}>
        {!!formState.errors[name]?.message ? (
          <p data-test={"auth-field-error"}>
            {formState.errors[name]?.message}
          </p>
        ) : null}
      </div>
    </>
  );
};

export default memo(FormField);
