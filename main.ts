// the-poster-for-a-place-that-i-2-20261121-0539 — "Fernholt"
// A travel poster for a place that does not exist: Fernholt, a town that
// lives inside one colossal hollow tree in a misty emerald forest — glowing
// amber windows spiralling up the trunk, rope bridges between the branches,
// paper lanterns, fireflies, a stream at its roots. The poster's promise is
// a stay in the branches: lantern light, mist at dawn. The name is set in
// large cream serif across the misty canopy, with the tagline
// "SLEEP IN THE BRANCHES" beneath it. The scene is an original AI-generated
// painting (scene.png, made for this entry); the type is set by build.html
// and rendered to entry.png.
//
// Output contract: this program copies entry.png to the output directory,
// byte for byte, so every run writes identical bytes — the same poster,
// no re-render, no network.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const ENTRY_FILE = "entry.png";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, ENTRY_FILE), join(outDir, ENTRY_FILE));
