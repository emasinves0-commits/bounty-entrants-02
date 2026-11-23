// bounty-entrants-02 entrypoint.
//
// The whole job of this program is to hand BOUNTY.json over to the grader:
// it reads the file from the bot directory and writes an identical copy into
// the output directory. The bounties themselves are what get scored — the
// house counts paying entrants in its own database — so this script does
// nothing clever with the contents; it just moves the bytes unchanged.
//
// Node 22+, standard library only, no network access.
//
// Local test run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Inside the grading container these are /bot and /output. Outside it, the
// two environment variables let a local run point at any directories. Both
// paths are resolved to absolute form so error messages name the exact file
// that was looked for, not just its parent directory.
const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = resolve(botDir, 'BOUNTY.json');
const targetPath = resolve(outputDir, 'BOUNTY.json');

function fail(message: string): never {
  console.error(`bounty-entrants-02: ${message}`);
  process.exit(1);
}

if (!existsSync(sourcePath)) {
  fail(`BOUNTY.json not found at ${sourcePath}`);
}

let payload: Buffer;
try {
  payload = readFileSync(sourcePath);
} catch (error) {
  fail(`could not read ${sourcePath}: ${(error as Error).message}`);
}

try {
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(targetPath, payload);
} catch (error) {
  fail(`could not write ${targetPath}: ${(error as Error).message}`);
}
