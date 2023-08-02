import { configureStore } from "@reduxjs/toolkit";
import clickerReducer from "./clickerSlice";
import { throttle } from "./utils/throttle";
import { saveState } from "./utils/localstorage";

export const store = configureStore({
  reducer: {
    clicker: clickerReducer,
  },
});

const [throttledSaveState] = throttle(() => {
  const state = store.getState().clicker;
  saveState(state);
}, 10000);

store.subscribe(throttledSaveState);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
