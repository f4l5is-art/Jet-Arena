# Jet Arena

A lightweight 3D jetpack arena shooter (Mini Militia style gameplay, low-poly 3D) that runs in the
browser and installs to the home screen on **iPhone and Android** as a fullscreen app (no browser bar).
Original game, code and art: nothing here comes from Mini Militia / Doodle Army.

## Modes
- **Play vs bots**: works fully offline once loaded.
- **Online lobby**: create a room (4-letter code) or join one from the public list. Needs the small Node server below.
- **Hotspot (beta)**: no internet. Host turns on their phone hotspot, friends join that Wi-Fi, then connect by scanning QR codes (WebRTC). Everyone must have opened the game once with internet so it is cached.

## Run it
```
npm install
npm run build        # bundles src/ -> dist/
npm start            # serves dist/ and the lobby relay on http://localhost:8080
npm test             # sim, QR-code codec and lobby server tests
```

## Put it online (free): so phones can install it
Phones only install web apps from **https**. Easiest free options:
1. **Render / Railway / Fly.io** (free tiers): deploy this folder as a Node app (build command `npm install && npm run build`, start command `npm start`). Gives you an https address with working online lobbies.
2. **GitHub Pages / Netlify / Cloudflare Pages**: upload the `dist/` folder for the game itself (solo + hotspot). Online lobbies then need the Node server hosted elsewhere; paste its `wss://.../ws` address into the game's Online screen.

## Install on your phone
- iPhone: open the link in **Safari** → Share → **Add to Home Screen**.
- Android: Chrome menu → **Install app**.
Open it once with internet so it caches for offline hotspot play.

## Controls
Touch: left thumb = move, drag right side = look (shooting is automatic when the crosshair is on an enemy; turn auto-fire off in Settings to get a FIRE button), JUMP (tap), JET (hold to fly), AIM (toggle scope/sights; the sniper gets a full scope and a 4x/8x button), reload, weapon switch.
Desktop: WASD, mouse (click to capture), Space = jump (hold in the air to fly) or Shift = jetpack, 1-4 or wheel = weapons, R = reload, right mouse = aim (wheel = scope zoom), Esc = pause.

## Hotspot play: step by step
1. Host phone: turn on mobile hotspot. Friends: join that Wi-Fi.
2. Everyone opens Jet Arena → Hotspot. Host taps **I'm the host**, friends tap **Join a friend**.
3. Friend scans the host's QR. Friend's screen then shows a QR; host scans it (or paste the text codes if scanning is awkward). They connect directly.
4. Host taps **Invite another friend** for each extra player, then **Start match**.
Camera permission is needed: the browser only reveals the phone's real Wi-Fi address after the camera is allowed.
Limits: beta. The host's phone runs the match, so it should be a decent device; keep it unlocked and in the foreground.

## Layout
`src/core.js` map + physics, `src/sim.js` host-authoritative game, `src/bots.js` AI, `src/net.js` + `server/server.js` networking,
`src/sdpcodec.js` QR-sized WebRTC codes, `src/render.js` three.js, `src/input.js` controls, `src/main.js` menus/HUD.
Tuning: weapons are in `WEAPONS` and the map is in `core.js`.

## Deploy the lobby server on Render (free)
1. Put this folder in a GitHub repository (the prebuilt `dist/` must be included).
2. render.com > New + > **Blueprint** > pick the repo > Apply. (`render.yaml` does the rest.)
3. Open the Render link: it serves the game too. In the game's **Online lobby** screen the server
   address fills itself in. If you play from another host (e.g. Netlify), paste `wss://YOUR-NAME.onrender.com/ws` once.
Free Render servers sleep after ~15 min idle: the first online connection after a break takes up to a minute.
After changing code, run `npm run build` and commit `dist/` again.

## Aiming model
- The crosshair is exact: the third-person camera sits beside you, so the game aims the bullet from your eye at the spot the crosshair sees. It lands on the crosshair at any range.
- The crosshair gap is the real spread. Moving, flying and rapid fire widen it; aiming (AIM) tightens it. Standing still and scoped, the sniper has zero spread.
- Hit boxes match the avatar (separate smaller head box for 1.5x head shots).
