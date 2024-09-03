import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import {
    THelpAndSupportForm,
} from "types/common";;

export const createFeedback = (
    params: THelpAndSupportForm
  ): Promise<AxiosResponse<string>> =>
    client.post(endpoints.feedback.getFeedback(), { params });
  
  export const getFeedback = (
    params: THelpAndSupportForm
  ): Promise<AxiosResponse<THelpAndSupportForm[]>> =>
    client.get(endpoints.feedback.getFeedback(), { params });