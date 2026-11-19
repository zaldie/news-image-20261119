// News image entry for Wednesday 18 November 2026 (Node 22, standard library
// only). The entry image lives beside this file as entry.png; the program
// copies it to the output directory as entry.png. A plain copy is byte-exact
// and deterministic: two runs write the same bytes, with no network, so the
// judge sees exactly the image the repository holds.
//
// Run outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
