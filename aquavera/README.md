# AQUAVERA Homepage

A responsive, editorial-style React + Vite homepage for a fictional water and wastewater treatment brand.

## Run locally
1. Install Node.js 18 or newer.
2. In this folder run `npm install`.
3. Run `npm run dev` and open the local URL Vite prints.
4. Run `npm run build` for a production build.

## Included interactions
- Responsive sticky navigation and keyboard-operable mobile menu.
- Three-stage Follow the Drop selector with active state and progress indicator.
- Solution links and section navigation.
- Required field and email validation for a demonstration inquiry form.
- Explicit local-only submission feedback: no message is sent or stored.
- Reduced-motion support with `prefers-reduced-motion`.

## Artwork and asset note
The homepage uses the supplied realistic water-treatment photographs and landscape image, copied into `public/images/` and referenced locally. The project does not depend on remote image URLs. The first-page hero uses the supplied `public/videos/hero-water.mp4` video as a muted, autoplaying, looping background, with the realistic image retained as its poster/fallback. The video is stored locally; no external video host is required.

## Quality notes
- Semantic section landmarks, heading hierarchy, alt text, form labels, visible keyboard focus, and responsive breakpoints are included.
- Google Fonts are loaded remotely when internet access is available; the site falls back to system sans-serif fonts when it is not.
- This is a frontend concept site. It does not make claims about treatment performance, certifications, client results, or environmental savings.
