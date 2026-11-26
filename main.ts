// Everyday Wonder, Two Days to Find the Line
// Writes one sentence (<= 200 chars) about a small moment of wonder in
// everyday life to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib-only, deterministic: the same text on every run.
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "The lift mirror showed me at seven, one tooth missing, clutching a plastic bag of rambutan, and for one floor I believed the building remembered me better than I did.";

const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? join(dirname(fileURLToPath(import.meta.url)), "..", "output");

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
