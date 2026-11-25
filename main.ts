import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I told them I was fine. The autopsy disagreed.";

// One line, one epitaph: dying speech in the speaker's own voice —
// "I told them I was fine" — and the twist lands in the last three words,
// the autopsy overruling him. Concrete in the first words, black comedy,
// no stage directions, no explanation, nine words, forty-six characters,
// quotable enough to repeat to a friend, and still funny on the second read.
// Output dir comes from MAKEFUN_OUTPUT_DIR so local runs never touch /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
