import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";
import {
  TCreateFeedbackRequestBody,
  TCreateFeedbackResponse,
} from "types/common";

export const createFeedback = (
  requestBody: TCreateFeedbackRequestBody
): Promise<AxiosResponse<TCreateFeedbackResponse>> =>
  client.post(endpoints.feedback.getFeedback(), requestBody);
