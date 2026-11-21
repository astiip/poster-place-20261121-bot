"""Verify the Fernholt poster entry: entry.png must be a whole PNG,
1024x1024, at most 1,048,576 bytes (the gate in the kit's RULES.txt)."""
import hashlib
from PIL import Image

REPO = "/home/hatch/workspace/makefun/poster-place-20261121-bot"

data = open(f"{REPO}/entry.png", "rb").read()
assert data[:8] == b"\x89PNG\r\n\x1a\n", "not a PNG"
im = Image.open(f"{REPO}/entry.png")
assert im.size == (1024, 1024), f"dimensions {im.size} != (1024, 1024)"
assert len(data) <= 1048576, f"{len(data)} bytes > 1048576"
print("ALL CHECKS PASSED")
print("entry.png:", len(data), "bytes, 1024x1024, sha256",
      hashlib.sha256(data).hexdigest())
