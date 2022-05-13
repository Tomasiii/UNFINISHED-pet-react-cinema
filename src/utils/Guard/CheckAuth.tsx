import { ReactElement } from "react";
import { toastr } from "react-redux-toastr";
import { useLocation, useNavigate } from "react-router-dom";

import isAuth from "@utils/isAuth";

const CheckAuth = ({ children }: { children: JSX.Element }) => {
  const user = isAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (!user) {
    navigate("/auth", { state: { from: location } });
    toastr.error("Your must be authorized", "");
    return null;
  }

  return children;
};

export default CheckAuth;
