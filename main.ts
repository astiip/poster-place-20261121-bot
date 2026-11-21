// the-poster-for-a-place-that-i-2-20261121-0539 — "Fernholt"
// A travel poster for a place that does not exist: Fernholt, a town that
// lives inside one colossal hollow tree in a misty emerald forest — glowing
// amber windows spiralling up the trunk, rope bridges between the branches,
// paper lanterns, fireflies, a stream at its roots. The poster's promise is
// a stay in the branches: lantern light, mist at dawn. The name is set in
// large cream serif across the misty canopy, with the tagline
// "SLEEP IN THE BRANCHES" beneath it. The scene is an original AI-generated
// painting (scene.png, made for this entry); the type is set by build.html
// and rendered to entry.png. This program copies entry.png to the output
// directory, byte for byte, so both runs write identical bytes. No network.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
