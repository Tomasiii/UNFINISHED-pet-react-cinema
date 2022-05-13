import { ReactElement, useEffect } from "react";
import { toastr } from "react-redux-toastr";
import { useLocation, useNavigate } from "react-router-dom";

import isAuth from "@utils/isAuth";

const WithAuth = ({ children }: { children: ReactElement }) => {
  const user = isAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { from: location } });
    }
  }, [user]);

  if (!user) {
    toastr.error("Your must be authorized", "");
    return null;
  }

  return children;
};

export default WithAuth;
