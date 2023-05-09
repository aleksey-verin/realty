import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IRootState } from '../store';
import { dealsType, mockDealsRus } from '../../utils/mockdata/mockDealsRus';

interface initialStateTypes {
  deals: dealsType[];
}

const initialState: initialStateTypes = {
  deals: mockDealsRus
};

const dealsSlice = createSlice({
  name: 'dealsSlice',
  initialState,
  reducers: {
    addDeals(state, { payload }: PayloadAction<dealsType>) {
      state.deals.push(payload);
    }
  }
});

export const selectorDeals = (state: IRootState) => state.dealsSlice;

export const { addDeals } = dealsSlice.actions;

export default dealsSlice.reducer;
