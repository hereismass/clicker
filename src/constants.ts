type Generator = {
  basePrice: number;
  baseGoldPerSecond: number;
};

export const generators = ['pickaxe', 'laser', 'dwarf'];


export const pickaxe: Generator = {
  basePrice: 10,
  baseGoldPerSecond: 1
};


export const laser: Generator = {
  basePrice: 100,
  baseGoldPerSecond: 10
};

export const dwarf: Generator = {
  basePrice: 1500,
  baseGoldPerSecond: 100
};
