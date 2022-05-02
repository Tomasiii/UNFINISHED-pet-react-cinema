import { useLocation } from "react-router-dom";

import useAuth from "@hooks/useAuth";

const useAuthRedirect = () => {
  const user = useAuth();
  // const navigate = useNavigate();
  // console.log(navigate);
  // const params = useParams();
  // console.log(params);

  const location = useLocation();
  console.log(location);
  return user;
};

export default useAuthRedirect;
