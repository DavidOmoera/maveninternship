import { AxiosResponse } from "axios";
import { client } from "./client";
import { endpoints } from "./endpoints";

export const getSubscriptionsRequest = (): Promise<AxiosResponse<string[]>> =>
  client.get(endpoints.subscription.getPlans());
