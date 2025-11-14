import { fetchFood } from "../api/fetchFood.js";
import { formatFoodData } from "../helpers/formatFoodData.js";

async function testPipeline() {
    const data = await fetchFood("coke");

    const first = data.products?.[0];
    if (!first) {
        console.error("FAIL: No products returned.");
        return;
    }

    const cleaned = formatFoodData(first);

    console.log("TEST FULL PIPELINE:");
    console.log(cleaned);
}

testPipeline();
