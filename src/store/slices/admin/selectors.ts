import { RootState } from "types/common";

export const selectUsers = (state: RootState) => state.admin.users;
export const selectOrganizations = (state: RootState) =>
  state.admin.organizations;
export const selectAdminLoading = (state: RootState) => state.admin.loading;
export const selectAdminError = (state: RootState) => state.admin.error;
