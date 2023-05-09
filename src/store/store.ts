import { combineReducers, configureStore } from '@reduxjs/toolkit';
import localizationSlice from './reducers/localizationSlice';
import dealsSlice from './reducers/dealsSlice';
import { useDispatch } from 'react-redux';

export const rootReducer = combineReducers({
  localizationSlice,
  dealsSlice
});

export const store = configureStore({
  reducer: rootReducer
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
