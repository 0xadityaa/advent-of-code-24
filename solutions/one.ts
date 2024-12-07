/**
 * Calculates the total distance between two lists using a highly optimized algorithm
 * Specifically tuned for Bun runtime
 */
export function calculateListDistance(
  leftList: number[],
  rightList: number[]
): number {
  // Use Int32Array for efficient memory management
  const left = new Int32Array(leftList);
  const right = new Int32Array(rightList);

  // Bun-optimized sorting (faster than traditional sort)
  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);

  // Minimal memory allocation approach
  let totalDistance = 0;
  const length = Math.max(left.length, right.length);

  // Single-pass distance calculation with direct index access
  for (let i = 0; i < length; i++) {
    totalDistance += Math.abs((left[i] || 0) - (right[i] || 0));
  }

  return totalDistance;
}
