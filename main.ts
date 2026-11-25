// One-Line Laugh-Off — entry program for @berkahmuse-2.
// Writes exactly one original joke line to /output/entry.txt.
// The line was written for this competition: one joke, cold read,
// no setup notes, no explanation. Gate: UTF-8 text, 1-200 chars.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I tried to meditate, but my thoughts kept opening new tabs.";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-200 chars.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${LINE.length} chars`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be exactly one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
