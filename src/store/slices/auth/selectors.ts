import { RootState } from "types/common";

export const userDataSelector = (state: RootState) => state.auth.userData;
export const signingUpSelector = (state: RootState) => state.auth.isSigningUp;
