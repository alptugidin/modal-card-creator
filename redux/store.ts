import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import apperanceReducer from '../features/appearanceSlice';

const store = configureStore({
  reducer: {
    appearance: apperanceReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch <AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
