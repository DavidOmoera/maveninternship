import { combineReducers } from '@reduxjs/toolkit';

import authSlice from './auth';
import organizationSlice from './organization';
import topRepsSlice from './topRepsSlice'; 

export const rootReducer = combineReducers({
  auth: authSlice,
  organization: organizationSlice,
  topReps: topRepsSlice,
});


export type RootState = ReturnType<typeof rootReducer>; 

export default rootReducer;
