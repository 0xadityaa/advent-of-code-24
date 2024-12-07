// Imagine the Chief Historian has left behind two lists of location IDs that the Historians want to compare. The goal is to find out how "different" these lists are by calculating the total distance between their numbers.
// Here's how it works:

// First, you sort both lists from smallest to largest.
// Then, you pair up the numbers from each list in order:

// The smallest number from the left list is paired with the smallest from the right list
// The second smallest from the left is paired with the second smallest from the right
// And so on...


// For each pair, you calculate the absolute difference between the two numbers.
// You add up all these differences to get a total "distance" between the lists.

// Let's walk through the example they provided:
// Left list (sorted): 1, 2, 3, 3, 4, 4
// Right list (sorted): 3, 3, 4, 5, 7, 9
// Pairing and calculating distances:

// 1 and 3: distance is |1 - 3| = 2
// 2 and 3: distance is |2 - 3| = 1
// 3 and 3: distance is |3 - 3| = 0
// 3 and 4: distance is |3 - 4| = 1
// 4 and 5: distance is |4 - 5| = 1
// 4 and 9: distance is |4 - 9| = 5

// Total distance: 2 + 1 + 0 + 1 + 1 + 5 = 11
// To solve this puzzle, you'd need to:

// Sort both input lists
// Pair up the numbers
// Calculate the absolute difference for each pair
// Sum up all these differences


export function calculateListDistance(
  leftList: number[],
  rightList: number[]
): number {
  const left = new Int32Array(leftList);
  const right = new Int32Array(rightList);

  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);

  let totalDistance = 0;
  const length = Math.max(left.length, right.length);

  for (let i = 0; i < length; i++) {
    totalDistance += Math.abs((left[i] || 0) - (right[i] || 0));
  }

  return totalDistance;
}
