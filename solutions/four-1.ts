// The task is to find occurrences of the word "XMAS" in a grid created from a given input string.
// The grid is constructed in such a way that it can be searched in multiple directions.

// Steps to achieve this:
// 1. Define a class `WordSearchSolver` that will handle the grid and searching logic.
// 2. In the constructor, create the grid from the input string and initialize the number of rows and columns.
// 3. Define a method `createGrid(input: string)` that:
//    - Calculates the size of the grid based on the length of the input string.
//    - Fills the grid with characters from the input string, padding with spaces if necessary.
// 4. Define the possible directions to search for the word "XMAS":
//    - Right, down, diagonal down-right, diagonal down-left, left, up, diagonal up-left, diagonal up-right.
// 5. Define a method `findXMASCount()` that:
//    - Initializes a count variable to zero.
//    - Iterates through each cell in the grid.
//    - For each cell, calls `checkAllDirectionsWithOverlap(r, c)` to check for the word "XMAS" in all directions.
//    - Returns the total count of occurrences found.
// 6. Define a method `checkAllDirectionsWithOverlap(startR: number, startC: number)` that:
//    - Initializes a local count variable to zero.
//    - Iterates through each direction and checks if "XMAS" can be found using `findXMASWithOverlap(startR, startC, dr, dc)`.
//    - Returns the local count of occurrences found in that starting position.
// 7. Define a method `findXMASWithOverlap(startR: number, startC: number, dr: number, dc: number)` that:
//    - Calculates the positions of each letter in "XMAS" based on the starting position and direction.
//    - Checks if all calculated positions are within the bounds of the grid.
//    - If in bounds, checks if the characters at those positions match "X", "M", "A", and "S" respectively.
//    - Returns true if the word is found, otherwise returns false.

export class WordSearchSolver {
  private grid: string[][];
  private rows: number;
  private cols: number;
  private target: string = "XMAS";

  constructor(input: string) {
    this.grid = this.createGrid(input);
    this.rows = this.grid.length;
    this.cols = this.grid[0].length;
  }

  private createGrid(input: string): string[][] {
    const side = Math.ceil(Math.sqrt(input.length));
    const grid: string[][] = [];

    for (let i = 0; i < side; i++) {
      grid.push(
        input
          .slice(i * side, (i + 1) * side)
          .padEnd(side, " ")
          .split("")
      );
    }

    return grid;
  }

  private directions = [
    [0, 1], // right
    [1, 0], // down
    [1, 1], // diagonal down-right
    [1, -1], // diagonal down-left
    [0, -1], // left
    [-1, 0], // up
    [-1, -1], // diagonal up-left
    [-1, 1], // diagonal up-right
  ];

  findXMASCount(): number {
    let count = 0;

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        count += this.checkAllDirectionsWithOverlap(r, c);
      }
    }

    return count;
  }

  private checkAllDirectionsWithOverlap(
    startR: number,
    startC: number
  ): number {
    let localCount = 0;

    for (const [dr, dc] of this.directions) {
      if (this.findXMASWithOverlap(startR, startC, dr, dc)) {
        localCount++;
      }
    }

    return localCount;
  }

  private findXMASWithOverlap(
    startR: number,
    startC: number,
    dr: number,
    dc: number
  ): boolean {
    const xPos = startR;
    const mPos = startR + dr;
    const aPos = startR + 2 * dr;
    const sPos = startR + 3 * dr;

    const xCol = startC;
    const mCol = startC + dc;
    const aCol = startC + 2 * dc;
    const sCol = startC + 3 * dc;

    const isInBounds =
      xPos >= 0 &&
      xPos < this.rows &&
      xCol >= 0 &&
      xCol < this.cols &&
      mPos >= 0 &&
      mPos < this.rows &&
      mCol >= 0 &&
      mCol < this.cols &&
      aPos >= 0 &&
      aPos < this.rows &&
      aCol >= 0 &&
      aCol < this.cols &&
      sPos >= 0 &&
      sPos < this.rows &&
      sCol >= 0 &&
      sCol < this.cols;

    if (!isInBounds) return false;

    return (
      this.grid[xPos][xCol] === "X" &&
      this.grid[mPos][mCol] === "M" &&
      this.grid[aPos][aCol] === "A" &&
      this.grid[sPos][sCol] === "S"
    );
  }
}
