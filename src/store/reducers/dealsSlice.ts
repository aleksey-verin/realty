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
    addDeal(state, { payload }: PayloadAction<dealsType>) {
      state.deals.push(payload);
    },
    editDeal(state, { payload }: PayloadAction<dealsType>) {
      const indexDeal = state.deals.findIndex((item) => item.id_deal === payload.id_deal);
      state.deals[indexDeal] = payload;
    },
    deleteDeal(state, { payload }: PayloadAction<dealsType>) {
      state.deals.filter((deal) => deal.id_deal !== payload.id_deal);
    }
  }
});

export const selectorDeals = (state: IRootState) => state.dealsSlice;

export const { addDeal, editDeal, deleteDeal } = dealsSlice.actions;

export default dealsSlice.reducer;
