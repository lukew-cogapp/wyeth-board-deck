# Wyeth Foundation — Discovery findings deck

Board presentation walking through what we learned during the discovery visit
(Chadds Ford, 3–5 March 2026), before handing off to Grant for the design
walkthrough.

Astro 6 + MDX slide deck, themed with the Wyeth Immersion palette and a
Tiempos-style serif. Same engine as `claude-at-cogapp`.

## Run

```sh
npm install
npm run dev      # localhost:4321
```

Index at `/`. Individual slides at `/slide/<slug>` where slug is the mdx
filename (e.g. `/slide/authority`). Arrow keys / PageUp-Down navigate; Home/End
jump to first/last.

## Build

```sh
npm run build    # outputs to dist/
npm run preview  # serve the built deck
```

## Slides

- Content lives in `src/content/slides/<slug>.mdx`
- Order is set in `src/content/order.ts` (move a line to reorder)
- Frontmatter: `title`, optional `bg`, `align`, `section`, `notes`, `docs`

### Backgrounds (`bg`)

Drawn from the nine Wyeth Immersion colour themes. Default is `paper`.

| `bg` | colour | text |
| :--- | :--- | :--- |
| `paper` | Paper `#f2ecdc` | graphite |
| `graphite` | Graphite `#232121` | paper |
| `thicket` | Thicket `#2f2828` | paper |
| `lichen` | Lichen Green `#7fa881` | graphite |
| `ember` | Ember Orange `#e58e2d` | graphite |
| `storm` | Storm Blue `#144f77` | paper |
| `squall` | Squall Blue `#0d344e` | paper |
| `dress` | Dress Pink `#e9c8d1` | graphite |
| `flame` | Flame Burgundy `#48282d` | paper |

The full palette (all 25 named colours across nine themes) is defined as
`--color-*` tokens in `src/styles/global.css`, sampled from the Wyeth Immersion
Figma board.

## Fonts

**Tiempos** (Klim Type Foundry, licensed). The woff2 files live in
`public/fonts/tiempos/` and are declared as `@font-face` in `global.css`:

- **Tiempos Headline** → `--font-serif` (headings + the Cogapp wordmark)
- **Tiempos Text** → `--font-sans` (body, labels, UI)

Both are exposed as Tailwind tokens, so `font-serif` / `font-sans` resolve to
them everywhere. The licensed files are not redistributable: don't publish them
outside Cogapp/WFAA use.

## Stack

Astro 6, MDX, Tailwind v4, Node 22+.

## Privacy

`noindex, nofollow` on every page; `public/robots.txt` denies all crawlers. Don't
commit private client data.
