import { processInput } from "./utils/one.ts";
import { calculateListDistance } from "./solutions/one.ts";
import { processReports } from "./solutions/two-1.ts";
import { processSafeReports } from "./solutions/two-2.ts";
import { readFileSync } from "fs";
import { parseCorruptedMemory } from "./solutions/three-1.ts";
import { parseCorruptedMemoryWithInstructions } from "./solutions/three-2.ts";

function main() {
  // Solution ONE
  try {
    console.info("---> SOLUTION 1:\n");
    const { leftList, rightList } = processInput("./inputs/one.txt");
    const result = calculateListDistance(leftList, rightList);
    console.log("Total Distance:", result);
  } catch (error) {
    console.error("Error processing input:", error);
  }

  // Solution TWO
  try {
    console.info("\n---> SOLUTION 2 PT-1:\n");
    const safeReportCount = processReports("./inputs/two.txt");
    console.log("Number of Safe Reports:", safeReportCount);
  } catch (error) {
    console.error("Error processing reports:", error);
  }

  //   Solution TWO 2
  try {
    console.info("\n---> SOLUTION 2 PT-2:\n");
    const safeReportCount = processSafeReports("./inputs/two.txt");
    console.log("Number of Safe Reports:", safeReportCount);
  } catch (error) {
    console.error("Error processing reports:", error);
  }

//   Solution THREE
  try {
    console.info("\n---> SOLUTION 3 PT-1:\n");
    const input = readFileSync("./inputs/three.txt", "utf-8").trim();
    const result = parseCorruptedMemory(input);
    console.log("Total Multiplication Sum:", result);
  } catch (error) {
    console.error("Error processing memory:", error);
  }
//   Solution THREE 2
  try {
    console.info("\n---> SOLUTION 3 PT-2:\n");
    const input = readFileSync("./inputs/three.txt", "utf-8").trim();
    const result = parseCorruptedMemoryWithInstructions(input);
    console.log(`Total Multiplication Sum: ${result}`);
  } catch (error) {
    console.error("Error processing memory:", error);
  }
}

main();
