// The task is to parse a corrupted memory string and calculate the sum of valid multiplication instructions.
// The valid instructions are in the format: mul(X,Y) where X and Y are 1-3 digit numbers.
// Any extraneous or invalid instructions should be ignored.

// Steps to achieve this:
// 1. Define a regular expression pattern to match valid multiplication instructions (mul(X,Y)).
// 2. Define a pattern to filter out unwanted instructions that contain "don't" statements.
// 3. Clean the input string:
//    - Remove all newline characters.
//    - Remove any unwanted instructions using the filter pattern.
// 4. Find all matches of the valid multiplication pattern in the cleaned input.
// 5. Initialize a total sum variable to 0.
// 6. For each match found:
//    - Parse the first number (X) and the second number (Y) from the match.
//    - Calculate the product of X and Y and add it to the total sum.
// 7. Return the total sum of all valid multiplication results.

export function parseCorruptedMemoryWithInstructions(
  memoryString: string
): number {
  const mulPattern = /mul\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/g;

  const filterPattern = /don't\(\).*?do\(\)|don't\(\).*/g;

  const cleanedInput = memoryString
    .replaceAll("\n", "")
    .replace(filterPattern, "");

  const matches = [...cleanedInput.matchAll(mulPattern)];

  return matches.reduce((total, match) => {
    const x = parseInt(match[1], 10);
    const y = parseInt(match[2], 10);
    return total + x * y;
  }, 0);
}
