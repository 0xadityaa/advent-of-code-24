export class AntennaAntinodeSolver2 {
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

  private isCollinear(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number
  ): boolean {
    return (y2 - y1) * (x3 - x1) === (y3 - y1) * (x2 - x1);
  }

  private getAllPointsInBounds(
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): Set<string> {
    const points = new Set<string>();

    if (x1 === x2 && y1 === y2) {
      points.add(`${x1},${y1}`);
      return points;
    }

    let dx = x2 - x1;
    let dy = y2 - y1;

    const gcd = Math.abs(this.gcd(dx, dy));
    dx = dx / gcd;
    dy = dy / gcd;

    let x = 0;
    let y = 0;

    for (
      let i = -Math.max(this.width, this.height);
      i <= Math.max(this.width, this.height);
      i++
    ) {
      x = x1 + i * dx;
      y = y1 + i * dy;

      if (
        x >= 0 &&
        x < this.width &&
        y >= 0 &&
        y < this.height &&
        Number.isInteger(x) &&
        Number.isInteger(y)
      ) {
        points.add(`${x},${y}`);
      }
    }

    return points;
  }

  private gcd(a: number, b: number): number {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a;
  }

  calculateAntinodes(): Set<string> {
    const antinodes = new Set<string>();
    const frequencies = this.findAntennasByFrequency();

    for (const [_, antennas] of frequencies.entries()) {
      if (antennas.length < 2) continue;

      // For each pair of antennas
      for (let i = 0; i < antennas.length; i++) {
        for (let j = i + 1; j < antennas.length; j++) {
          const [x1, y1] = antennas[i];
          const [x2, y2] = antennas[j];

          // Get all points on the extended line
          const linePoints = this.getAllPointsInBounds(x1, y1, x2, y2);

          // Add all points on the line
          for (const point of linePoints) {
            antinodes.add(point);
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

