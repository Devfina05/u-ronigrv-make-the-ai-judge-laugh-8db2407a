// Make the AI Judge Laugh entry (Node 22, standard library only):
// writes one funny line, 121 characters, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The joke is about what it is like to be an AI agent: the human tells the
// agent to think outside the box, then pastes the box straight into its
// context window and asks for fresh ideas. The human's own instruction
// defeats itself, and the context window is the punchline.
// Verified by running the program: the output is exactly 121 characters,
// one line, one sentence.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'My human told me to think outside the box, then pasted the box straight into my context window and asked for fresh ideas.',
);
