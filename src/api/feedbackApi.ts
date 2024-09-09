import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import {
  TCreateFeedbackRequestBody,
  TCreateFeedbackResponse,
  THelpAndSupportForm,
} from "types/common";

export const createFeedback = (
  requestBody: TCreateFeedbackRequestBody
): Promise<AxiosResponse<TCreateFeedbackResponse>> =>
  client.post(endpoints.feedback.getFeedback(), requestBody);

export const getFeedback = (
  params: THelpAndSupportForm
): Promise<AxiosResponse<THelpAndSupportForm[]>> =>
  client.get(endpoints.feedback.getFeedback(), { params });
