# Bubble — Hackathon Demo App

An **installable app** (PWA): float your ideas as bubbles, tap to pop them when you're done.

- Add short ideas or notes (they appear as bubbles)
- Tap any bubble to pop it
- Works offline after first load; data stays in the app

## Run as an app

**You need to serve the project over HTTP** (not `file://`) so you can install it.

```bash
# From the project folder:
python3 -m http.server 8000
# or
npx serve .
```

Then open **http://localhost:8000** in your browser.

### Install the app

- **Chrome (desktop):** Click the install icon in the address bar, or menu → “Install Bubble…”
- **Chrome (Android):** Menu → “Add to Home screen” or “Install app”
- **Safari (iOS):** Share → “Add to Home Screen”

After installing, open Bubble from your home screen or app list. It runs in its own window (no browser UI), like a native app.

## Stack

- HTML, CSS, JavaScript
- PWA: `manifest.json` + service worker for install and offline
- `localStorage` for your bubbles

## Demo pitch

*“Bubble is a minimal idea-capture app. You add thoughts as bubbles and pop them when you’re done—so your mind stays clear and your ideas visible. It’s an installable app that works offline.”*

Good luck at the hackathon.
