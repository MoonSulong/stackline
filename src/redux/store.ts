import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import retailReducer from '../features/retail/retailSlice';

export const store = configureStore({
  reducer: {
    retail: retailReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
