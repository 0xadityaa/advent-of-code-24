export class AntennaAntinodeSolver {
  private grid: string[];
  private width: number;
  private height: number;

  constructor(input: string) {
    this.grid = input.trim().split("\n");
    this.height = this.grid.length;
    this.width = this.grid[0].length;
  }

  private findAntennasByFrequency(): Map<string, [number, number][]> {
    const frequencies = new Map<string, [number, number][]>();

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const freq = this.grid[y][x];
        if (freq !== ".") {
          if (!frequencies.has(freq)) {
            frequencies.set(freq, []);
          }
          frequencies.get(freq)!.push([x, y]);
        }
      }
    }

    return frequencies;
  }

  calculateAntinodes(): Set<string> {
    const antinodes = new Set<string>();
    const frequencies = this.findAntennasByFrequency();

    for (const [freq, antennas] of frequencies.entries()) {
      for (let i = 0; i < antennas.length; i++) {
        for (let j = i + 1; j < antennas.length; j++) {
          const [x1, y1] = antennas[i];
          const [x2, y2] = antennas[j];

          // Compute dx and dy
          const dx = x2 - x1;
          const dy = y2 - y1;

          // Compute two potential antinodes
          const antiX1 = x1 - dx;
          const antiY1 = y1 - dy;
          const antiX2 = x2 + dx;
          const antiY2 = y2 + dy;

          const potentialAntinodes = [
            [antiX1, antiY1],
            [antiX2, antiY2],
          ];

          for (const [x, y] of potentialAntinodes) {
            if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
              antinodes.add(`${x},${y}`);
            }
          }
        }
      }
    }

    return antinodes;
  }

  solve(): number {
    return this.calculateAntinodes().size;
  }
}


