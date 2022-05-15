import Cookies from "js-cookie";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useActions } from "@hooks/useActions";

import isAuth from "@utils/isAuth";

const AuthProvider = () => {
  const user = isAuth();
  const { checkAuth, logout } = useActions();
  const { pathname } = useLocation();

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) checkAuth();
  }, []);

  useEffect(() => {
    const refreshToken = Cookies.get("refreshToken");
    if (!refreshToken && user) logout();
  }, [pathname]);

  return null;
};

export default AuthProvider;
