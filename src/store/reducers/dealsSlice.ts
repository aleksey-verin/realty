import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IRootState } from '../store';
import { dealsType, mockDealsRus } from '../../utils/mockdata/mockDealsRus';
import { sortingDataDeals } from '../../utils/constants/constants';
import { sortingHelper } from '../../utils/helpers';

interface initialStateTypes {
  deals: dealsType[];
  sortingType: string;
  // modifiedDeals: dealsType[];
}

const initialState: initialStateTypes = {
  deals: [],
  sortingType: sortingDataDeals.none.value
  // modifiedDeals: []
};

const dealsSlice = createSlice({
  name: 'dealsSlice',
  initialState,
  reducers: {
    setDeals(state, { payload }: PayloadAction<dealsType[]>) {
      state.deals = payload;
      // state.modifiedDeals = sortingHelper(payload, state.sortingType);
    },
    addDeal(state, { payload }: PayloadAction<dealsType>) {
      state.deals.push(payload);
      // state.modifiedDeals.push(payload);
    },
    editDeal(state, { payload }: PayloadAction<dealsType>) {
      const indexDeal = state.deals.findIndex((item) => item.id_deal === payload.id_deal);
      state.deals[indexDeal] = payload;
    },
    deleteDeal(state, { payload }: PayloadAction<dealsType>) {
      state.deals = state.deals.filter((deal) => deal.id_deal !== payload.id_deal);
    },
    // setModifiedDeals(state) {
    //   state.modifiedDeals = state.deals;
    // },
    setSortingType(state, { payload }: PayloadAction<string>) {
      console.log('setSortType reducer');
      state.sortingType = payload;
    }
    // sortDeals(state, { payload }: PayloadAction<string>) {
    //   console.log('sortDeals reducer');
    //   state.modifiedDeals = sortingHelper(state.deals, payload);
    // }
  }
});

export const selectorDeals = (state: IRootState) => state.dealsSlice;

export const {
  setDeals,
  addDeal,
  editDeal,
  deleteDeal,
  setSortingType
  // sortDeals,
  // setModifiedDeals
} = dealsSlice.actions;

export default dealsSlice.reducer;
