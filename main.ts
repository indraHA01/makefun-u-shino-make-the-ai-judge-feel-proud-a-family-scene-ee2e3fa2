// make.fun entry: "Make the AI Judge Feel Proud: A Family Scene"
// Writes one warm, funny, heartfelt family scene (<=280 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Forty years in, Dad still cuts the crusts off Mum's toast every morning.\nThen he eats them himself, standing at the counter — somebody, he says, has to love the parts nobody wants.";

// Two lines, one small scene: forty years of marriage told through toast.
// The joke lands the affection — he eats the crusts nobody wants, so she
// never has to. No word is decoration; every word is the marriage.
// The gate: /output/entry.txt must be UTF-8 text of 1 to 280 characters,
// not only white space. Refuse to write anything that would fail it.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 280 || ENTRY.trim().length === 0) {
  throw new Error(`Entry invalid: ${chars.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${[...ENTRY].length} characters to /output/entry.txt`);
