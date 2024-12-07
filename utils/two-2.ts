function isStrictlySafe(report: number[]): boolean {
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

export function isReportSafe(report: number[]): boolean {
  if (isStrictlySafe(report)) return true;

  for (let i = 0; i < report.length; i++) {
    const modifiedReport = [...report.slice(0, i), ...report.slice(i + 1)];
    if (isStrictlySafe(modifiedReport)) return true;
  }

  return false;
}