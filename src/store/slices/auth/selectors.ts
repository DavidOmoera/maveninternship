import { RootState } from "types/common";

export const userDataSelector = (state: RootState) => state.auth.userData;
