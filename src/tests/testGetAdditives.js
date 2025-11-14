import { getAdditives } from "../helpers/getAdditives.js";

const mock = {
  additives_tags: ["en:e330", "en:e150d"]
};

console.log("TEST getAdditives:");
console.log(getAdditives(mock));   // Expected: ["E330", "E150D"]
