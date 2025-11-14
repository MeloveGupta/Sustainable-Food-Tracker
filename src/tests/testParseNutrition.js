import { parseNutrition } from "../helpers/parseNutrition.js";

const mockProduct = {
  nutriments: {
    energy_100g: 180,
    fat_100g: 0,
    sugars_100g: 39,
    proteins_100g: 0,
  }
};

console.log("TEST parseNutrition:");
console.log(parseNutrition(mockProduct));
