// https://github.com/facebook/react/blob/main/packages/react/src/ReactLazy.js
// https://github.com/facebook/react/blob/4c03bb6ed01a448185d9a1554229208a9480560d/packages/shared/ReactTypes.js#L177
// проблема коли передаємо Lazy бо він приходить ununitialized (_status = -1) і я не зняю як з нього витягти метаданні ({ isOnlyAdmin, isOnlyUser })
import { Navigate } from "react-router-dom";

import { getRoleFlag } from "@utils/guard/CheckRole/getRoleFlag";
// import { getRoleFlag } from "@utils/guard/CheckRole/getRoleFlag";
import isAuth from "@utils/isAuth";

interface IProps {
  children: JSX.Element;
}

const CheckRole = ({ children }: IProps) => {
  const user = isAuth();
  console.log(children);
  const { isOnlyAdmin, isOnlyUser } = getRoleFlag(children);
  // const { isOnlyAdmin, isOnlyUser } = { isOnlyAdmin: true, isOnlyUser: false };

  if (!isOnlyAdmin && !isOnlyUser) return children;
  if (user?.isAdmin) return children;
  if (isOnlyAdmin) return <Navigate replace to="/404" />;
  if (user && isOnlyUser) return children;

  // never call but need to be right typed HOC
  return null;
};

export default CheckRole;
