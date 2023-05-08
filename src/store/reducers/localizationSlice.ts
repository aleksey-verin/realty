import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IRootState } from '../store';

export type languagesType = 'rus' | 'eng';

interface initialStateTypes {
  lang: languagesType;
}

const initialState: initialStateTypes = {
  lang: 'rus'
};

const localizationSlice = createSlice({
  name: 'localizationSlice',
  initialState,
  reducers: {
    setLanguage(state, { payload }: PayloadAction<languagesType>) {
      state.lang = payload;
    }
  }
});

export const selectorLocalization = (state: IRootState) => state.localizationSlice;

export const { setLanguage } = localizationSlice.actions;

export default localizationSlice.reducer;
