import { getEcoScore } from "../helpers/getEcoScore.js";

console.log("TEST getEcoScore:");
console.log(getEcoScore({ ecoscore_grade: "b" }));   // Expected: "B"
console.log(getEcoScore({ ecoscore_grade: "d" }));   // Expected: "D"
console.log(getEcoScore({}));                        // Expected: "N/A"
