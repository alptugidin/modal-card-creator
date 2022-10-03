import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import apperanceReducer from '../features/appearanceSlice';
import targetingReducer from '../features/targetingSlice';
import modalCreateReducer from '../features/modalCreateSlice';

const store = configureStore({
  reducer: {
    appearance: apperanceReducer,
    targeting: targetingReducer,
    modalCreate: modalCreateReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch <AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
