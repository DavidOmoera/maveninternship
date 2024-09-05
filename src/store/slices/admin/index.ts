import { createSlice } from "@reduxjs/toolkit";
import { AdminState } from "types/common";
import {
  makeAdmin,
  getAllUsers,
  getAllOrganizations,
  searchUsers,
  searchOrganizations,
  deleteUser,
  deleteOrganization,
  suspendUser,
  suspendOrganization,
  unSuspendUser,
  unsuspendOrganization,
  updateUserRole,
  updateUserDetails,
  updateOrganization,
  banEmail,
  deleteBannedEmail,
} from "./thunks";

const initialState: AdminState = {
  users: [],
  organizations: [],
  loading: false,
  error: undefined,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    clearAdminState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(makeAdmin.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(makeAdmin.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(makeAdmin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getAllOrganizations.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getAllOrganizations.fulfilled, (state, action) => {
      state.loading = false;
      state.organizations = action.payload;
    });
    builder.addCase(getAllOrganizations.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(searchUsers.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(searchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(searchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(searchOrganizations.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(searchOrganizations.fulfilled, (state, action) => {
      state.loading = false;
      state.organizations = action.payload;
    });
    builder.addCase(searchOrganizations.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(deleteUser.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteOrganization.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(deleteOrganization.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(deleteOrganization.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(suspendUser.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(suspendUser.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(suspendUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(suspendOrganization.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(suspendOrganization.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(suspendOrganization.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(unSuspendUser.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(unSuspendUser.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(unSuspendUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(unsuspendOrganization.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(unsuspendOrganization.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(unsuspendOrganization.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(updateUserRole.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(updateUserRole.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(updateUserRole.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(updateUserDetails.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(updateUserDetails.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(updateUserDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(updateOrganization.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(updateOrganization.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(updateOrganization.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(banEmail.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(banEmail.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(banEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteBannedEmail.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(deleteBannedEmail.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(deleteBannedEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearAdminState } = adminSlice.actions;
export default adminSlice.reducer;
