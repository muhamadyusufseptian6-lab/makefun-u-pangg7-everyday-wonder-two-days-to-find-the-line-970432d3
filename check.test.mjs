// TDD-lite test for the Everyday Wonder entry (kit: program/v1, gate = valid).
// Checks, per the kit gate: entry.txt is UTF-8 text of 1..200 chars, not only
// whitespace, a single sentence, and deterministic across runs.
import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));

function runOnce() {
  const outDir = mkdtempSync(join(tmpdir(), "everyday-wonder-"));
  try {
    execFileSync("node", [join(repoDir, "main.ts")], {
      env: { ...process.env, MAKEFUN_OUTPUT_DIR: outDir },
      stdio: "pipe",
    });
    return readFileSync(join(outDir, "entry.txt"), "utf8");
  } finally {
    rmSync(outDir, { recursive: true, force: true });
  }
}

test("entry is 1..200 chars, non-whitespace, one sentence", () => {
  const text = runOnce();
  assert.ok(text.trim().length >= 1, "entry must not be empty");
  assert.ok(text.length <= 200, `entry is ${text.length} chars, over 200`);
  assert.equal(text.trim(), text, "no leading/trailing whitespace");
  assert.equal((text.match(/\./g) ?? []).length, 1, "exactly one sentence");
});

test("entry is deterministic across runs", () => {
  assert.equal(runOnce(), runOnce());
});
