export type Generator = {
  name?: string;
  description?: string;
  // icon to add
  basePrice: number;
  baseGoldPerSecond: number;
  rateGrowth: number;
};

export type Achievement = {
  title: string;
  description: string;
  // icon to add
  conditionType: GeneratorType | "totalGold" | "click";
  conditionAmount: number;
};

export const generators = [
  "pickaxe",
  "jackhammer",
  "drill",
  "laser",
  "dwarf",
] as const;

export type GeneratorType = (typeof generators)[number];

const pickaxe: Generator = {
  basePrice: 15,
  baseGoldPerSecond: 0.1,
  rateGrowth: 1.1,
};

const jackhammer: Generator = {
  basePrice: 100,
  baseGoldPerSecond: 1,
  rateGrowth: 1.5,
};

const drill: Generator = {
  basePrice: 1500,
  baseGoldPerSecond: 10,
  rateGrowth: 1.1,
};

const laser: Generator = {
  basePrice: 10000,
  baseGoldPerSecond: 100,
  rateGrowth: 1.15,
};

const dwarf: Generator = {
  basePrice: 30000,
  baseGoldPerSecond: 300,
  rateGrowth: 1.1,
};

export const generatorsConfig = {
  pickaxe,
  jackhammer,
  drill,
  laser,
  dwarf,
};

// frequency to calculate current gold available
export const UPDATE_FREQUENCY = 4;
