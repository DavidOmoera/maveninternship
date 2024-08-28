import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "api";
import { AxiosError } from "axios";
import { TUpdateUserRequestBody } from "types/common";

export const getUserData = createAsyncThunk("auth/getUserData", async () => {
  try {
    const response = await authApi.getUserDataRequest();
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    throw error;
  }
});

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (requestBody: TUpdateUserRequestBody, { dispatch }) => {
    try {
      const response = await authApi.updateUserRequest(requestBody);
      dispatch(getUserData());

      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw error;
    }
  }
);
