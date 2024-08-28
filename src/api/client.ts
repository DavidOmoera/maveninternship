import axios, { AxiosInstance, AxiosResponse } from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export const client: AxiosInstance = axios.create({
  baseURL,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
client.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers = {
      ...config.headers,
      ...(token
        ? {
            Authorization: `Bearer ${JSON.parse(token)}`,
          }
        : {}),
    };
  }
  return config;
});

client.interceptors.response.use((response: AxiosResponse) => {
  return response;
});

client.interceptors.response.use(null, async (error) => {
  if (error.response?.status === 401) {
    // refresh token
  }
  return Promise.reject(error);
});
