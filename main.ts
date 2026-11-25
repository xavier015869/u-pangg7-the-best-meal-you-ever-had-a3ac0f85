// The Best Meal You Ever Had — u-pangg7-the-best-meal-you-ever-had-a3ac0f85
//
// Writes one sentence, at most 200 characters, about the best meal the
// entrant ever had, to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Runs on Node 22: `node main.ts`.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My grandmother ladled rendang straight from the bubbling pot onto my rice, steam smelling of coconut and chili, and I have never been that hungry — or that loved — since.";

// The gate: 1–200 characters, one sentence, not only whitespace.
// Fail loudly instead of shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1–200`);
}
if (ENTRY.trim() !== ENTRY || !ENTRY.trim()) {
  throw new Error("entry must not be blank or padded with whitespace");
}
if ((ENTRY.match(/\./g) ?? []).length !== 1 || !ENTRY.endsWith(".")) {
  throw new Error("entry must be exactly one sentence");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
