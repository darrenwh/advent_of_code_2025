import fs from "fs";

const inFile = process.argv[2] ?? `input/day01.txt`;
const input = fs.readFileSync(inFile, "utf8").trim();

export function part1(s: string) {
  let dialNumber: number = 50;
  let zeroHit: number = 0;
  const lines = s.split(/\r?\n/);
  lines.forEach((element) => {
    const [, letter, number] = element.match(/^([A-Za-z]+)(\d+)$/);
    let direction: number = letter == 'L' ? -1 : 1;
    for (let i = 0; i < parseInt(number); i++) {
      dialNumber += direction;
      if (dialNumber > 99) dialNumber = 0;
      if (dialNumber < 0) dialNumber = 99;
    }
    if (dialNumber === 0) {
      zeroHit++;
    }
  });
  return zeroHit;
}

export function part2(s: string) {
  let dialNumber: number = 50;
  let zeroHit: number = 0;
  const lines = s.split(/\r?\n/);
  lines.forEach((element) => {
    const [, letter, number] = element.match(/^([A-Za-z]+)(\d+)$/);
    let direction: number = letter == 'L' ? -1 : 1;
    for (let i = 0; i < parseInt(number); i++) {
      dialNumber = (dialNumber + direction + 100) % 100;

      // count every time the dial becomes exactly 0
      if (dialNumber === 0) zeroHit++;
    }

  });
  return zeroHit;
}

if (import.meta.url === `file://${process.cwd()}/src/day01.ts`) {
  console.log("Part 1:", part1(input));
  console.log("Part 2:", part2(input));
}

