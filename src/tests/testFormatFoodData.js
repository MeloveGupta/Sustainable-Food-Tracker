import { formatFoodData } from "../helpers/formatFoodData.js";

const mock = {
  product_name: "Coca-Cola",
  image_front_url: "https://some-image.jpg",
  nutriments: { energy_100g: 170 },
  ecoscore_grade: "d",
  additives_tags: ["en:e330"],
};

console.log("TEST formatFoodData:");
console.log(formatFoodData(mock));
