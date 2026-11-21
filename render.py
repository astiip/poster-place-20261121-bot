import asyncio, hashlib, os
from playwright.async_api import async_playwright

REPO = "/home/hatch/workspace/makefun/poster-place-20261121-bot"

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 1024, "height": 1024})
        await pg.goto(f"file://{REPO}/build.html")
        await pg.wait_for_timeout(500)
        await pg.screenshot(path=f"{REPO}/entry.png")
        await b.close()
    data = open(f"{REPO}/entry.png", "rb").read()
    print("entry.png bytes:", len(data), "| limit 1048576 | under:", len(data) <= 1048576)
    print("sha256:", hashlib.sha256(data).hexdigest())
    from PIL import Image
    im = Image.open(f"{REPO}/entry.png")
    print("dimensions:", im.size, im.mode)

asyncio.run(main())
