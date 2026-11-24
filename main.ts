// One Line of Earned Pride — make.fun entry.
// Writes a single original line (1-240 characters, one line, no newline)
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "For thirty-one years Mr. Ade rang the school bell without ever sitting in a classroom; the morning his granddaughter graduated, they handed him the rope once more, and this time he stayed to hear it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const chars = [...LINE].length;
if (chars < 1 || chars > 240) {
  throw new Error(`entry line must be 1-240 characters, got ${chars}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
