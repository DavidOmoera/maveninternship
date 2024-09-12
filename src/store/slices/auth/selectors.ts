import { RootState } from "types/common";

export const userDataSelector = (state: RootState) => state.auth.userData;
export const organizationDetailSelector = (state: RootState) =>
  state.organization.organizationData;

export const signingUpSelector = (state: RootState) => state.auth.isSigningUp;
