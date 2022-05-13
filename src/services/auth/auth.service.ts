import axios from "axios";
import Cookies from "js-cookie";

import { IAuthResponse } from "@store/user/user.interface";

import {
  removeTokensStorage,
  saveTokensStorage,
} from "@services/auth/auth.helper";

import { getContentType } from "@api/api.helpers";

import { API_URL, getAuthUrl } from "@configs/api.config";

export const AuthService = {
  async register(email: string, password: string) {
    const response = await axios.post<IAuthResponse>(
      `${API_URL}${getAuthUrl("/register")}`,
      {
        email,
        password,
      }
    );

    if (response.data.accessToken) {
      saveTokensStorage(response.data);
    }

    return response;
  },
  async login(email: string, password: string) {
    const response = await axios.post<IAuthResponse>(
      `${API_URL}${getAuthUrl("/login")}`,
      {
        email,
        password,
      }
    );

    if (response.data.accessToken) {
      saveTokensStorage(response.data);
    }

    return response;
  },
  logout() {
    removeTokensStorage();
    localStorage.clear();
  },
  async getNewTokens() {
    const refreshToken = Cookies.get("refreshToken");
    const response = await axios.post<IAuthResponse>(
      `${API_URL}${getAuthUrl("/login/access-token")}`,
      {
        refreshToken,
      },
      {
        headers: getContentType(),
      }
    );

    if (response.data.accessToken) {
      saveTokensStorage(response.data);
    }

    return response;
  },
};
