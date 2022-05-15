import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import isAuth from "@utils/isAuth";

type LocationState = {
  from: string;
};

const useAuthRedirect = () => {
  const user = isAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as LocationState | null;
  const from = state?.from ?? "/";

  useEffect(() => {
    if (user) navigate(from);
  }, [user]);
};

export default useAuthRedirect;
