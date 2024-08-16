

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Representative } from 'types/common.ts';

export interface TopRepsState {  
  topReps: Representative[];
}

const initialState: TopRepsState = {
  topReps: [],
};

export const topRepsSlice = createSlice({
  name: 'topReps',
  initialState,
  reducers: {
    addTopRep: (state, action: PayloadAction<Representative>) => {
      if (!state.topReps.some(rep => rep.name === action.payload.name)) {
        state.topReps.push(action.payload);
      }
    },
    removeTopRep: (state, action: PayloadAction<Representative>) => {
      state.topReps = state.topReps.filter(rep => rep.name !== action.payload.name);
    },
  },
});

export const { addTopRep, removeTopRep } = topRepsSlice.actions;

export default topRepsSlice.reducer;
