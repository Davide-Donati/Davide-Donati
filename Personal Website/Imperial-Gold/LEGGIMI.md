# Davide Donati — Gold (v3)

This package is the full website, **not just a screenshot**. It contains five HTML pages, a shared stylesheet, the original full-colour photograph, and the CV PDF.

## Pages

- `index.html` — homepage
- `research.html` — research
- `publications.html` — papers and preprints
- `talks.html` — talks
- `cv.html` — CV and teaching

## Uploading to GitHub Pages

Open the repository `Davide-Donati` on GitHub and upload **the files inside this folder**, not the folder itself, to the repository root. Replace the existing files. In Settings → Pages, use the relevant branch and `/ (root)` if it has not already been configured.

If the repository contains older versions of `contact.html` or `teaching.html`, delete those two obsolete files; their contents were merged into the CV or removed in the previous revision.

## Editing

- Content: edit the relevant `.html` files.
- Appearance: edit `assets/theme.css`; generic layout rules are in `assets/base.css`.
- Photograph: replace `assets/portrait.jpg` with a photo of the same filename.
- CV PDF: replace `assets/CV.pdf`.
- Navigation: currently Home, Research, Publications, Talks, CV.

## Changes in this revision

- Removed `filter: grayscale(1)` from the homepage portrait — the original colour JPEG is displayed unchanged.
- Removed the decorative pink strip below the portrait (including mobile CSS).
- Removed the entire “Selected preprint” block from the homepage.
- Removed the visible and structured-data references to Leonard Kreutz from the **homepage**. He is still mentioned on the **CV page**.
- Retained all previous modifications: smaller homepage name, email obfuscation, no contact page, no teaching page, no publications search.

## Latest design changes

- Smaller headings on Research, Publications, Talks and CV pages (maximum 4.75rem instead of 7rem on desktops).
- Slightly reduced subsection headings.
- Removed “Mathematical analysis” and “Munich, Germany” from the top of the homepage.
- Left the photo, homepage name and mobile typography otherwise unchanged.

## Gold v4 — dimensioni del ritratto

La foto in homepage ora ha larghezza massima di 330 px su desktop (prima 440 px), 290 px su tablet e 240 px sui telefoni. La fotografia originale rimane a colori, senza striscia rosa, e mantiene le sue proporzioni. Le dimensioni sono definite in `assets/theme.css` nella regola `.gold-portrait` e nelle media queries.

## Homepage: un articolo a caso

La sezione **From my work** sceglie uno degli 11 articoli/preprint in modo casuale ad ogni apertura della homepage. Se il browser consente `sessionStorage`, evita di ripetere quello mostrato nella visita precedente alla stessa scheda. Il pulsante **Another paper** permette di cambiare articolo senza ricaricare.

L'elenco degli articoli utilizzati dalla rotazione si trova in `index.html`, dentro il tag `<template id="paper-rotation-choices">`. Per aggiungere un articolo basta aggiungere una voce al template; modifica anche `publications.html` per mantenere aggiornata la bibliografia. Il testo iniziale della sezione funge da versione di riserva se JavaScript è disabilitato. La logica è in `assets/site.js`.
