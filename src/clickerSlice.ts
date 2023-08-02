import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import {
  generatorsConfig,
  UPDATE_FREQUENCY,
  type GeneratorType,
} from "./constants";

const BASE_CLICK_GOLD = 1;

export interface ClickerState {
  currentGold: number;
  totalGold: number;
  // computed but used for both selectors and actions, so we store it in the state
  goldPerSecond: number;
  pickaxe: {
    count: number;
    totalGold: number;
  };
  jackhammer: {
    count: number;
    totalGold: number;
  };
  drill: {
    count: number;
    totalGold: number;
  };
  laser: {
    count: number;
    totalGold: number;
  };
  dwarf: {
    count: number;
    totalGold: number;
  };
}

const initialState: ClickerState = {
  currentGold: 0,
  totalGold: 0,
  goldPerSecond: 0,
  pickaxe: {
    count: 0,
    totalGold: 0,
  },
  jackhammer: {
    count: 0,
    totalGold: 0,
  },
  drill: {
    count: 0,
    totalGold: 0,
  },
  laser: {
    count: 0,
    totalGold: 0,
  },
  dwarf: {
    count: 0,
    totalGold: 0,
  },
};

export const clickerSlice = createSlice({
  name: "clicker",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    click: (state) => {
      state.currentGold += BASE_CLICK_GOLD;
      state.totalGold += BASE_CLICK_GOLD;
    },

    buyGenerator: (
      state,
      action: PayloadAction<{ type: GeneratorType; price: number }>
    ) => {
      state[action.payload.type].count += 1;
      state.currentGold -= action.payload.price;

      state.goldPerSecond +=
        generatorsConfig[action.payload.type].baseGoldPerSecond;
    },
    // main action, automatically triggered
    autoMine: (state) => {
      state.currentGold += state.goldPerSecond / UPDATE_FREQUENCY;
      state.totalGold += state.goldPerSecond / UPDATE_FREQUENCY;

      // total gold for generators to calculate
    },
  },
});

export const { click, buyGenerator, autoMine } = clickerSlice.actions;

export const selectGold = (state: RootState) => {
  return {
    currentGold: state.clicker.currentGold,
    totalGold: state.clicker.totalGold,
    goldPerSecond: state.clicker.goldPerSecond,
  };
};

export const selectPickaxe = (state: RootState) => state.clicker.pickaxe;

export default clickerSlice.reducer;
