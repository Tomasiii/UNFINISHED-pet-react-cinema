import Cookies from "js-cookie";

import { IAuthResponse } from "@store/user/user.interface";

export const saveTokensStorage = (data: IAuthResponse) => {
  Cookies.set("accessToken", data.accessToken);
  Cookies.set("refreshToken", data.refreshToken);
};

export const removeTokensStorage = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};
