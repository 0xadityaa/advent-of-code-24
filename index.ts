import { processInput } from "./utils/one.ts";
import { calculateListDistance } from "./solutions/one.ts";
import { processReports } from "./solutions/two-1.ts";
import { processSafeReports } from "./solutions/two-2.ts";
import { readFileSync } from "fs";
import { parseCorruptedMemory } from "./solutions/three-1.ts";
import { parseCorruptedMemoryWithInstructions } from "./solutions/three-2.ts";
import { WordSearchSolver } from "./solutions/four-1.ts";
import { AntennaAntinodeSolver } from "./solutions/eight-1.ts";
import { AntennaAntinodeSolver2 } from "./solutions/eight-2.ts";

function main() {
  // Solution ONE
  try {
    const startTime = performance.now();
    console.log("\n---> SOLUTION 1:");
    const { leftList, rightList } = processInput("./inputs/one.txt");
    const result = calculateListDistance(leftList, rightList);
    console.log("Total Distance:", result);
    const endTime = performance.now();
    console.log(`Execution time: ${(endTime - startTime).toFixed(2)}ms\n`);
  } catch (error) {
    console.error("Error processing input:", error);
  }

  // Solution TWO
  try {
    const startTime = performance.now();
    console.log("---> SOLUTION 2 PT-1:");
    const safeReportCount = processReports("./inputs/two.txt");
    console.log("Number of Safe Reports:", safeReportCount);
    const endTime = performance.now();
    console.log(`Execution time: ${(endTime - startTime).toFixed(2)}ms\n`);
  } catch (error) {
    console.error("Error processing reports:", error);
  }

  // Solution TWO 2
  try {
    const startTime = performance.now();
    console.log("---> SOLUTION 2 PT-2:");
    const safeReportCount = processSafeReports("./inputs/two.txt");
    console.log("Number of Safe Reports:", safeReportCount);
    const endTime = performance.now();
    console.log(`Execution time: ${(endTime - startTime).toFixed(2)}ms\n`);
  } catch (error) {
    console.error("Error processing reports:", error);
  }

  // Solution THREE
  try {
    const startTime = performance.now();
    console.log("---> SOLUTION 3 PT-1:");
    const input = readFileSync("./inputs/three.txt", "utf-8").trim();
    const result = parseCorruptedMemory(input);
    console.log("Total Multiplication Sum:", result);
    const endTime = performance.now();
    console.log(`Execution time: ${(endTime - startTime).toFixed(2)}ms\n`);
  } catch (error) {
    console.error("Error processing memory:", error);
  }

  // Solution THREE 2
  try {
    const startTime = performance.now();
    console.log("---> SOLUTION 3 PT-2:");
    const input = readFileSync("./inputs/three.txt", "utf-8").trim();
    const result = parseCorruptedMemoryWithInstructions(input);
    console.log("Total Multiplication Sum:", result);
    const endTime = performance.now();
    console.log(`Execution time: ${(endTime - startTime).toFixed(2)}ms\n`);
  } catch (error) {
    console.error("Error processing memory:", error);
  }

  // Solution FOUR
  try {
    const startTime = performance.now();
    console.log("---> SOLUTION 4 PT-1:");
    const input = readFileSync("./inputs/four.txt", "utf-8").trim();
    const solver = new WordSearchSolver(input);
    const result = solver.findXMASCount();
    console.log("Number of XMAS occurrences:", result);
    const endTime = performance.now();
    console.log(`Execution time: ${(endTime - startTime).toFixed(2)}ms\n`);
  } catch (error) {
    console.error("Error reading file:", error);
  }

  // Solution EIGHT
  try {
    const startTime = performance.now();
    console.log("---> SOLUTION 8 PT-1:");
    const input = readFileSync("./inputs/eight.txt", "utf-8").trim();
    const solver = new AntennaAntinodeSolver(input);
    const res = solver.solve();
    console.log("Number of antinodes:", res);
    const endTime = performance.now();
    console.log(`Execution time: ${(endTime - startTime).toFixed(2)}ms\n`);
  } catch (error) {
    console.error("Error reading file:", error);
  }

  // Solution EIGHT 2
  try {
    const startTime = performance.now();
    console.log("---> SOLUTION 8 PT-2:");
    const input = readFileSync("./inputs/eight.txt", "utf-8").trim();
    const solver = new AntennaAntinodeSolver2(input);
    const res = solver.solve();
    console.log("Number of antinodes:", res);
    const endTime = performance.now();
    console.log(`Execution time: ${(endTime - startTime).toFixed(2)}ms\n`);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

main();
