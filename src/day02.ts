import fs from "fs";

const inFile = process.argv[2] ?? `input/day02.txt`;
const input = fs.readFileSync(inFile, "utf8").trim();

export function part1(s: string) {
  let sum: number = 0;
  const lines = s.replace(/\s+/g, "")   // remove spaces & newlines
    .split(",")            // split by comma
    .filter(x => x.length > 0)

  lines.forEach((element) => {
    let line = element.split("-");
    for (let i = parseInt(line[0]); i <= parseInt(line[1]); i++) {
      let invalidNumber: number = isRepeatedPair(i) ? i : 0;
      sum += invalidNumber;
    }
  });
  return sum
}

function isRepeatedPair(num: number): boolean {
  const s = String(num);
  const doubled = s + s;
  return doubled.slice(1, -1).includes(s);
}

function isRepeatedPattern(n: number): boolean {
  const s = String(n);
  if (s.length % 2 !== 0) return false;      // must be even-length
  const half = s.length / 2;
  return s.slice(0, half) === s.slice(half);
}

export function part2(s: string) {
  let sum: number = 0;
  const lines = s.replace(/\s+/g, "")   // remove spaces & newlines
    .split(",")            // split by comma
    .filter(x => x.length > 0)

  lines.forEach((element) => {
    let found: string = "";
    let line = element.split("-");
    for (let i = parseInt(line[0]); i <= parseInt(line[1]); i++) {
      let invalidNumber: number = isRepeatedPattern(i) ? i : 0;
      sum += invalidNumber;
      found = found.concat(' ').concat(String(invalidNumber));
    }
    // console.log(`Found numbers: ${found}`);
  });
  return sum
}

if (import.meta.url === `file://${process.cwd()}/src/day02.ts`) {
  console.log("Part 1:", part1(input));
  console.log("Part 2:", part2(input));
}

