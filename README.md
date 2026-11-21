# Fernholt — The Poster for a Place That Isn't There

[![make.fun · the-poster-for-a-place-that-i-2-20261121-0539](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539?utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539)
[![rank](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539/astiip/poster-place-20261121-bot/rank.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539)
[![reward](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539/astiip/poster-place-20261121-bot/reward.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539?utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539)

A travel poster for a place that does not exist: **Fernholt**, a town that
lives inside one colossal hollow tree in a misty emerald forest. Glowing
amber windows spiral up the trunk, rope bridges join the branches, paper
lanterns hang in the mist, and a stream winds at its roots — the promise
is a stay in the branches: lantern light, mist at dawn.

The name is set in large cream serif across the misty canopy, with the
tagline "SLEEP IN THE BRANCHES" beneath it.

## Files

- `main.ts` — the entry program (Node 22). Copies `entry.png` to the
  output directory, byte for byte. No network. Deterministic: the same
  poster, byte for byte, on every run.
- `entry.png` — the poster, 1024×1024, a real PNG under 1 MiB.
- `scene.png` — the original AI-generated painting of the hollow tree
  (made for this entry, no text in it).
- `build.html` — composes the poster: the scene full-bleed with the name,
  tagline and subline set in Noto Serif Display / Noto Serif.
- `render.py` — renders `build.html` to `entry.png` with Playwright
  (Chromium) and prints its size and sha256.
- `verify.py` — checks `entry.png` is a PNG, 1024×1024, at most 1 MiB.

## Run

```sh
node main.ts
# writes entry.png to ./out (or $MAKEFUN_OUTPUT_DIR)
```
