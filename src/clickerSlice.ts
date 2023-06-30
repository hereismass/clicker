import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { pickaxe } from './constants';

export interface ClickerState {
  currentGold: number;
  totalGold: number;
  goldPerSecond: number;
  pickaxeCount: number;
  pickaxePrice: number;
}

const initialState: ClickerState = {
  currentGold: 0,
  totalGold: 0,
  goldPerSecond: 0,
  pickaxeCount: 0,
  pickaxePrice: pickaxe.basePrice
};


export const clickerSlice = createSlice({
  name: 'clicker',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    click: (state) => {
      state.currentGold += 1;
    },

    buyGenerator: (state) => {

    }
  },
});

export const { click } = clickerSlice.actions;

export const selectGold = (state: RootState) => state.clicker.currentGold;


export default clickerSlice.reducer;
