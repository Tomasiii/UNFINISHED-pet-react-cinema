import { toastr } from "react-redux-toastr";
import { Navigate, useLocation } from "react-router-dom";

import isAuth from "@utils/isAuth";

const CheckAuth = ({ children }: { children: JSX.Element }) => {
  const user = isAuth();
  const location = useLocation();

  if (!user) {
    toastr.error("Your must be authorized", "", {
      onShowComplete: () => setTimeout(toastr.clean, 3000),
    });
    return <Navigate replace to="/auth" state={{ from: location }} />;
  }

  return children;
};

export default CheckAuth;
