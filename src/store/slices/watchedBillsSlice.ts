import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface Bill {
  id: string;
  state: string;
  relativeTime: string;
  title: string;
  status: string;
  description: string;
  name: string;
  image: string;
  supporter1: string;
  supporter2: string;
  supporter3: string;
  supporter4: string;
  supporter5: string;
  supporter6: string;
  count1: string;
  count2: string;
  billType: string;
  chamber: string;
  year: number;

}


export interface allBillsState {
  watchedBills: Bill[];
}


const initialState: allBillsState = {
  watchedBills: [],
};


const watchedBillsSlice = createSlice({
  name: 'watchedBills',
  initialState,
  reducers: {

    addBill: (state, action: PayloadAction<Bill>) => {

      const existingBill = state.watchedBills.find(bill => bill.id === action.payload.id);
      if (!existingBill) {
        state.watchedBills.push(action.payload);
      }
    },

    removeBill: (state, action: PayloadAction<string>) => {
      state.watchedBills = state.watchedBills.filter(
        (bill) => bill.id !== action.payload
      );
    },
  },
});


export const { addBill, removeBill } = watchedBillsSlice.actions;
export default watchedBillsSlice.reducer;
