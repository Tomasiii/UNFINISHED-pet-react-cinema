import axios from "axios";
import Cookies from "js-cookie";

import { removeTokensStorage } from "@services/auth/auth.helper";
import { AuthService } from "@services/auth/auth.service";

import { errorCatch } from "@api/api.helpers";

export const SERVER_URL = "http://localhost:4200";

export const instance = axios.create({
  baseURL: `${SERVER_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const accessToken = Cookies.get("accessToken");
  if (config.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response.status === 401 ||
        errorCatch(error) === "jwt expired" ||
        errorCatch(error) === "jwt must be provided") &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await AuthService.getNewTokens();

        return instance.request(originalRequest);
      } catch (e) {
        if (errorCatch(e) === "jwt expired") removeTokensStorage();
      }
    }

    throw error;
  }
);
