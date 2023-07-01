export type Generator = {
  basePrice: number;
  baseGoldPerSecond: number;
  rateGrowth: number;
};

export const generators = ["pickaxe", "laser", "dwarf"] as const;

export type GeneratorType = (typeof generators)[number];

const pickaxe: Generator = {
  basePrice: 10,
  baseGoldPerSecond: 1,
  rateGrowth: 1.1,
};

const laser: Generator = {
  basePrice: 100,
  baseGoldPerSecond: 10,
  rateGrowth: 1.1,
};

const dwarf: Generator = {
  basePrice: 1500,
  baseGoldPerSecond: 100,
  rateGrowth: 1.1,
};

export const generatorsConfig = {
  pickaxe,
  laser,
  dwarf,
};

// we auto mine 4 times per second
export const UPDATE_FREQUENCY = 4;
