export const SortOption = {
  NameAZ: "az",
  NameZA: "za",
  PriceLowHigh: "lohi",
  PriceHighLow: "hilo",
} as const;

//Union of the const object's values. Stays in sync if options are added/removed
export type SortOption = (typeof SortOption)[keyof typeof SortOption];
