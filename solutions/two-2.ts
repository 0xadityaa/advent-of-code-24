// This module needs to be able to evaluate the safety of reports based on specific criteria.
// A report is considered "safe" if it meets the following conditions:

// 1. The numbers in the report must be either:
//    - Consistently increasing, OR
//    - Consistently decreasing

// 2. When examining adjacent numbers (pairs of numbers next to each other), their difference must be:
//    - At least 1
//    - At most 3

// For example:
// - A report like "1 2 3 4 5" is SAFE because the numbers are increasing by 1.
// - A report like "9 7 6 4 3" is SAFE because the numbers are decreasing by 1 or 2.
// - A report like "1 3 2 4 5" is UNSAFE because the numbers do not consistently change in one direction.
// - A report like "1 2 7 8 9" is UNSAFE because the jump from 2 to 7 is too large (more than 3).
// - A report like "8 6 4 4 1" is UNSAFE because the transition from 4 to 4 means no change.

// The `isStrictlySafe` function checks if a report is strictly safe based on the above criteria.
// The `isReportSafe` function extends this check by allowing the removal of one number from the report.
// If removing one number results in a strictly safe report, then the original report is considered safe.

// Your job is to use these functions to count how many reports in the input meet these safety criteria.

import { readFileSync } from "fs";
import { isReportSafe } from "../utils/two-2";

export function processSafeReports(filePath: string): number {
  const content = readFileSync(filePath, "utf-8");

  const reports = content
    .trim()
    .split("\n")
    .map((line) => line.trim().split(/\s+/).map(Number));

  const safeReports = reports.filter(isReportSafe);

  return safeReports.length;
}
