import { RootState } from "types/common";

export const organizationDataSelector = (state: RootState) =>
  state.organization.organizationData;
