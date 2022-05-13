import { userSelector } from "@store/user/user.selector";

import { useAppSelector } from "@hooks/hooksHelpers";

const isAuth = () => useAppSelector(userSelector);

export default isAuth;
