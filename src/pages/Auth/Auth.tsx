import { useCallback, useState } from "react";

import Login from "@pages/Auth/form/Login/Login";
import Register from "@pages/Auth/form/Register/Register";

import useAuthRedirect from "@hooks/useAuthRedirect";

import style from "./auth.module.scss";

interface IProps {}

const Auth = ({}: IProps) => {
  useAuthRedirect();

  const [typeAuth, setTypeAuth] = useState<"register" | "login">("register");
  const setLogin = useCallback(() => setTypeAuth("login"), []);
  const setRegister = useCallback(() => setTypeAuth("register"), []);

  return (
    <div className={style.auth}>
      {typeAuth === "register" ? (
        <Register goToLogin={setLogin} />
      ) : (
        <Login goToRegister={setRegister} />
      )}
    </div>
  );
};

export default Auth;
