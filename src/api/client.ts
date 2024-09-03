import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  isAxiosError,
} from "axios";
import { BrowserStorageKeys } from "types/common";
import { Routes } from "types/routes";
import BrowserStorageService from "utils/browserStorage";

const baseURL = import.meta.env.VITE_BASE_URL;

export const client: AxiosInstance = axios.create({
  baseURL,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
client.interceptors.request.use((config: any) => {
  const token = BrowserStorageService.get(BrowserStorageKeys.AccessToken);

  if (token) {
    config.headers = {
      ...config.headers,
      ...(token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {}),
    };
  }
  return config;
});

client.interceptors.response.use(
  (response: AxiosResponse) => response,
  function (error: Error | AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (
      isAxiosError(error) &&
      error.response?.status === 401 &&
      !error.response.data
    ) {
      // refresh token
      BrowserStorageService.remove(BrowserStorageKeys.AccessToken);
      window.location.href = `${window.location.origin}${Routes.Login}`;
    }

    return Promise.reject(error);
  }
);
