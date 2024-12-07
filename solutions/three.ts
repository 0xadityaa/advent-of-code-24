// The task is to find and calculate all valid multiplication instructions in a corrupted string of characters. Here are the key points:
// The goal is to find mul(X,Y) instructions where X and Y are 1-3 digit numbers
// Invalid or malformed mul instructions should be ignored
// Some instructions might have extra characters around or within them
// The final result is the sum of all valid multiplication results

export function parseCorruptedMemory(memoryString: string): number {
  const mulPattern = /mul\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/g;

  const matches = [...memoryString.matchAll(mulPattern)];

  return matches.reduce((total, match) => {
    const x = parseInt(match[1], 10);
    const y = parseInt(match[2], 10);
    return total + x * y;
  }, 0);
}
