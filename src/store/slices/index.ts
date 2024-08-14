import { combineReducers } from '@reduxjs/toolkit';

import authSlice from './auth';
import organizationSlice from './organization';

export const rootReducer = combineReducers({
  auth: authSlice,
  organization: organizationSlice,
});
