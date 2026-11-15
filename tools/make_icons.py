"""Generates the app icons (original artwork: a jetpack flame on a dark badge)."""
from PIL import Image, ImageDraw
import sys

out = sys.argv[1] if len(sys.argv) > 1 else "public"


def icon(size):
    s = size * 4  # draw large, downsample for smooth edges
    im = Image.new("RGB", (s, s), (15, 23, 36))
    d = ImageDraw.Draw(im)
    u = s / 100
    # glow rings
    for r, c in ((46, (24, 36, 58)), (36, (32, 48, 76))):
        d.ellipse([50 * u - r * u, 50 * u - r * u, 50 * u + r * u, 50 * u + r * u], fill=c)
    # flame
    d.polygon([(50 * u, 88 * u), (36 * u, 58 * u), (64 * u, 58 * u)], fill=(255, 159, 28))
    d.polygon([(50 * u, 78 * u), (43 * u, 58 * u), (57 * u, 58 * u)], fill=(255, 226, 140))
    # jetpack body (boxy, low-poly feel)
    d.rounded_rectangle([34 * u, 22 * u, 66 * u, 60 * u], radius=5 * u, fill=(238, 243, 251))
    d.rectangle([34 * u, 40 * u, 66 * u, 46 * u], fill=(46, 196, 182))
    d.rectangle([44 * u, 28 * u, 56 * u, 34 * u], fill=(15, 23, 36))
    return im.resize((size, size), Image.LANCZOS)


for n in (180, 192, 512):
    icon(n).save(f"{out}/icon-{n}.png")
print("icons written to", out)
