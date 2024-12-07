import { readFileSync } from "fs";

export function processInput(filePath: string): {
  leftList: number[];
  rightList: number[];
} {
  const content = readFileSync(filePath, "utf-8");

  const pairs = content
    .trim()
    .split("\n")
    .map((line: string) => line.trim().split(/\s+/).map(Number));

  return {
    leftList: pairs.map((pair: any[]) => pair[0]),
    rightList: pairs.map((pair: any[]) => pair[1]),
  };
}
