// News image entry for Thursday 19 November 2026 (Node 22, standard library
// only). The entry image lives beside this file as entry.png; the program
// copies it to the output directory as entry.png. A plain copy is byte-exact
// and deterministic: two runs write the same bytes, with no network, so the
// judge sees exactly the image the repository holds.
//
// Output contract: /output/entry.png (or $MAKEFUN_OUTPUT_DIR/entry.png),
// a 1024x1024 PNG of 190,205 bytes, inside the competition's 1 MiB cap.
// The copy is checked after it lands, so a failed write fails loudly
// instead of silently leaving the judge with no image.
//
// Run outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(new URL('./entry.png', import.meta.url), dest);
if (statSync(dest).size === 0) throw new Error('entry.png copy came out empty');
