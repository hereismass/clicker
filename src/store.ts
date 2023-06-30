import { configureStore } from '@reduxjs/toolkit';
import clickerReducer from './clickerSlice';

export const store = configureStore({
  reducer: {
    clicker: clickerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
