# Zefania Sinaringtyas Widuri — Portfolio

A static, animated personal portfolio built with plain HTML, CSS, and
JavaScript (GSAP + ScrollTrigger for scroll animation, Lenis for smooth
scrolling — both loaded from CDN). No build step, no framework, no backend.

## Project structure

```
/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/       ← put profile.jpg here
│   └── icons/        ← favicon.svg lives here
└── README.md
```

## Run locally

You can open `index.html` directly in a browser, but a local server avoids
any browser restrictions on relative paths:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

## Deploy

### Vercel
1. Push this folder to a GitHub repo (or drag-and-drop the folder in the
   Vercel dashboard → "Add New… → Project → Deploy").
2. No build command needed — set the framework preset to **Other** and
   leave the output directory as the project root.

### Netlify
1. Drag the project folder into the Netlify "Deploys" drop zone, or connect
   the GitHub repo.
2. Build command: leave blank. Publish directory: `/`.

### GitHub Pages
1. Push the folder to a repo.
2. Repo Settings → Pages → Deploy from branch → select `main` and `/root`.

### Cloudflare Pages
1. Connect the repo (or direct upload).
2. Build command: none. Build output directory: `/`.

Any of the above work as-is — the site is 100% static.

## Where to edit things

### Replace the profile photo
Add a photo at:
```
assets/images/profile.jpg
```
The About section (`<section class="about-me">` in `index.html`) already
points to this path. Until a real photo is added, an elegant placeholder
frame is shown automatically.

### Update content
All copy lives directly in `index.html`, organized by section with HTML
comments matching the section names (Hero, Introduction, By The Numbers,
Industrial Experience, Ideas, Research, Certifications, Timeline,
Achievements, Skills, About, Contact). Every fact on the page is sourced
from the provided CV — if you update the CV, update the matching section.

### Update colors
All color tokens are defined once at the top of `style.css`:
```css
:root{
  --background: #F7F3EF;
  --surface: #EFE8E4;
  --accent: #D9A8AD;
  --accent-light: #F0CED1;
  --text: #171717;
  --muted: #6F6A67;
  --dark-section: #161616;
}
```
Changing a value here updates it everywhere it's used.

### Update contact information
Edit the `.contact` section near the bottom of `index.html`:
- Email: the `mailto:` link text and href
- LinkedIn: the `href` on the LinkedIn button
- Phone / location: inside `.contact-meta`

## Notes on the build

- **Fonts:** Instrument Serif (editorial display), Manrope (body/nav),
  IBM Plex Mono (labels, numbers, technical captions) — loaded from Google
  Fonts.
- **Animation:** GSAP + ScrollTrigger drive scroll-based reveals, the sticky
  "Inside the Process" case study, the horizontal "Ideas That Move Industry"
  track, and the "Industrial Flow" signature diagram. Lenis provides the
  smooth-scroll feel. If either library fails to load (e.g. offline), the
  site falls back to plain CSS/IntersectionObserver reveals so nothing
  breaks.
- **Motion sensitivity:** `prefers-reduced-motion` is respected — see the
  media query at the bottom of `style.css` and the `reduceMotion` checks in
  `script.js`.
- **Custom cursor:** disabled automatically on touch devices.
- **Accuracy:** every number, date, and fact on the page is taken directly
  from the CV. No employers, awards, or results were invented.
