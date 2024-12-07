// Imagine you're reviewing safety reports for a nuclear reactor, and each report is a line of numbers representing different levels or measurements.
// A report is considered "safe" if it meets two specific conditions:

// The numbers must be either:

// Consistently increasing, OR
// Consistently decreasing


// When you look at adjacent numbers (pairs of numbers next to each other), their difference must be:

// At least 1
// At most 3



// So if a report looks like:

// "1 2 3 4 5" - This is SAFE because numbers are increasing by 1
// "9 7 6 4 3" - This is SAFE because numbers are decreasing by 1 or 2
// "1 3 2 4 5" - This is UNSAFE because the numbers are not consistently changing in one direction
// "1 2 7 8 9" - This is UNSAFE because the jump from 2 to 7 is too large (more than 3)
// "8 6 4 4 1" - This is UNSAFE because 4 to 4 means no change

// Your job is to count how many reports in the entire input meet these safety criteria.

import { readFileSync } from "fs";

function isReportSafe(report: number[]): boolean {
  if (report.length < 2) return true;

  let isIncreasing: boolean | null = null;

  for (let i = 1; i < report.length; i++) {
    const diff = report[i] - report[i - 1];

    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }

    if (isIncreasing === null) {
      isIncreasing = diff > 0;
    } else if (diff > 0 !== isIncreasing) {
      return false;
    }
  }

  return true;
}

export function processReports(filePath: string): number {
  const content = readFileSync(filePath, "utf-8");

  const reports = content
    .trim()
    .split("\n")
    .map((line) => line.trim().split(/\s+/).map(Number));

  console.log("Parsed Reports:", reports);

  const safeReports = reports.filter(isReportSafe);

  console.log("Safe Reports:", safeReports);

  return safeReports.length;
}
