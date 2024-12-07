import { processInput } from "./utils/one.ts";
import { calculateListDistance } from "./solutions/one.ts";

function main() {
// Solution ONE
  try {
    const { leftList, rightList } = processInput("./inputs/one.txt");
    const result = calculateListDistance(leftList, rightList);
    console.log("Total Distance:", result);
  } catch (error) {
    console.error("Error processing input:", error);
  }

// Solution TWO  
}

main();
