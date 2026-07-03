# Davide Donati - academic homepage

A self-contained static website designed for GitHub Pages. It uses a strong editorial layout with full-width colour bands, a carefully controlled typographic hierarchy, and a chronological numbered bibliography.

## Publish with GitHub Pages

1. Create a public repository named `YOUR-GITHUB-USERNAME.github.io`.
2. Upload everything in this folder to the repository root.
3. In GitHub, open **Settings → Pages** and select **Deploy from a branch**, then choose `main` and `/ (root)`.
4. Your website will appear at `https://YOUR-GITHUB-USERNAME.github.io`.

## First edits to make

- Replace the included `assets/CV.pdf` placeholder with your real CV before publishing.
- Edit the text in `index.html` directly. No framework, package manager, or build step is required.
- Each publication is one `<li class="publication-item">`. The CSS automatically assigns `[01]`, `[02]`, and so on in the order in which entries appear.
- Keep publications ordered from oldest to newest to preserve chronological numbering.
- The monogram in the hero is deliberate visual artwork; it avoids a generic stock-photo placeholder. You can later replace the entire `<aside class="hero-art">…</aside>` with a portrait if you prefer.

## Files

- `index.html` - content and links
- `style.css` - all visual styling and mobile layout
- `assets/` - add `CV.pdf` here

## Design note

The page is intentionally not a copy of another scholar's site. It takes inspiration from the concise, academic single-page structure you indicated, while using an original grid, typography, colour system, hierarchy, and visual mark.


## Links and navigation

All visible navigation items, publication titles, profile buttons, and small `arXiv` / `DOI` / `CVGMT` pills are active links. Publication titles open their primary online record in a new tab; the smaller pills provide the alternative links. On tablets and phones, the navigation remains visible in a horizontally scrollable row rather than disappearing.

The only local link that requires your action is `assets/CV.pdf`: replace the placeholder with your actual CV using exactly that filename.
