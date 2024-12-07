import { processInput } from "./utils/one.ts";
import { calculateListDistance } from "./solutions/one.ts";
import { processReports } from "./solutions/two.ts";

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
  try {
    const safeReportCount = processReports("./inputs/two.txt");
    console.log("Number of Safe Reports:", safeReportCount);
  } catch (error) {
    console.error("Error processing reports:", error);
  }
}

main();
