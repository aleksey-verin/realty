import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IRootState } from '../store';
import { dealsType, mockDealsRus } from '../../utils/mockdata/mockDealsRus';
import { sortingDataDeals } from '../../utils/constants/constants';
import { sortingHelper } from '../../utils/helpers';

interface initialStateTypes {
  deals: dealsType[];
  sortingType: string;
  modifiedDeals: dealsType[];
}

const initialState: initialStateTypes = {
  deals: mockDealsRus,
  sortingType: sortingDataDeals.none.value,
  modifiedDeals: mockDealsRus
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
      state.deals = state.deals.filter((deal) => deal.id_deal !== payload.id_deal);
    },
    sortDeals(state, { payload }: PayloadAction<string>) {
      state.sortingType = payload;
      state.modifiedDeals = sortingHelper(state.deals, payload);
    }
  }
});

export const selectorDeals = (state: IRootState) => state.dealsSlice;

export const { addDeal, editDeal, deleteDeal, sortDeals } = dealsSlice.actions;

export default dealsSlice.reducer;
