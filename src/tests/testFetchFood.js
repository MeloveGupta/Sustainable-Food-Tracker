import { fetchFood } from "../api/fetchFood.js";

async function testFetchFood() {
  const data = await fetchFood("coke");

  console.log("TEST fetchFood.js:");
  console.log("Products found:", data.products?.length);

  if (!data.products) {
    console.error("FAIL: No products array received.");
  } else {
    console.log("fetchFood Works!");
  }
}

testFetchFood();
