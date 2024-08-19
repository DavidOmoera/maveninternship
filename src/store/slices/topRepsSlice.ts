

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Representative } from 'types/common';

export interface TopRepsState {  
  topReps: Representative[];
}
const initialState: TopRepsState = {
  topReps: [],
};

const topRepsSlice = createSlice({
  name: 'topReps',
  initialState,
  reducers: {
    addTopRep(state, action: PayloadAction<Representative>) {
      const rep = action.payload;
      
      if (!state.topReps.find(r => r.name === rep.name && r.district === rep.district)) {
        state.topReps.push(rep);
      }
    },
    removeTopRep(state, action: PayloadAction<Representative>) {
      const rep = action.payload;
      state.topReps = state.topReps.filter(r => r.name !== rep.name || r.district !== rep.district);
    },
  },
});

export const { addTopRep, removeTopRep } = topRepsSlice.actions;
export default topRepsSlice.reducer;
