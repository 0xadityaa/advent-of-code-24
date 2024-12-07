import { readFileSync } from "fs";

// Synchronous input processing for Bun
export function processInput(filePath: string): {
  leftList: number[];
  rightList: number[];
} {
  // Read file synchronously using readFileSync
  const content = readFileSync(filePath, "utf-8");

  // Split and map in a single pass
  const pairs = content
    .trim()
    .split("\n")
    .map((line: string) => line.trim().split(/\s+/).map(Number));

  return {
    leftList: pairs.map((pair: any[]) => pair[0]),
    rightList: pairs.map((pair: any[]) => pair[1]),
  };
}
