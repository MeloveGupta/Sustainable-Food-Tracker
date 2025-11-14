import { fetchFood } from "../api/fetchFood.js";

async function test() {
    const data = await fetchFood("coke");
    console.log("FETCH RESULT:", data);
}

test();
