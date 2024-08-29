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
  error: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    clearAdminState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(makeAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(makeAdmin.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(makeAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(getAllOrganizations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllOrganizations.fulfilled, (state, action) => {
        state.loading = false;
        state.organizations = action.payload;
      })
      .addCase(getAllOrganizations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(searchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(searchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(searchOrganizations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchOrganizations.fulfilled, (state, action) => {
        state.loading = false;
        state.organizations = action.payload;
      })
      .addCase(searchOrganizations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(deleteOrganization.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteOrganization.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteOrganization.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(suspendUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(suspendUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(suspendUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(suspendOrganization.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(suspendOrganization.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(suspendOrganization.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(unSuspendUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(unSuspendUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(unSuspendUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(unsuspendOrganization.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(unsuspendOrganization.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(unsuspendOrganization.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(updateUserRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserRole.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateUserRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(updateUserDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserDetails.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(updateOrganization.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateOrganization.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateOrganization.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(banEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(banEmail.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(banEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(deleteBannedEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBannedEmail.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteBannedEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearAdminState } = adminSlice.actions;
export default adminSlice.reducer;
