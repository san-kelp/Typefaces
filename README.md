# Type Library

A type tester for the fonts installed on your computer and the whole Google Fonts catalogue. Type a word, spin the font dial, and see it set large, with the Wikipedia article on that word underneath in a second font. For Google fonts there is also a small outline editor: pull the points and curves of the letters you typed.

Everything runs in the browser. There is no build step, no framework and no server of its own.

## What it does

- **A dial for fonts.** Your installed fonts and 1,828 Google families sit on a rotating disc. Scroll, drag, click, or use the arrow keys. Whatever rests at the pointer is applied, with a soft click for each font that passes. A quick run of wheel notches speeds up, so you can sweep the whole list.
- **Filters** (Google tab), using Google's own tags: **Style** (Serif, Sans Serif, Calligraphy), **Feeling** (Calm, Cute, Business, Vintage…) and **Appearance** (Techno, Art Deco, Blackletter, Halloween…). Tags in one group widen the result; groups narrow it.
- **Search** with <kbd>Ctrl</kbd>+<kbd>K</kbd> (or <kbd>⌘</kbd>+<kbd>K</kbd>) to jump straight to the field while the dial is open.
- **Weights.** Every weight and italic of the selected family on a small second dial that appears once the dial has settled.
- **Headline and article.** The headline fits itself to the width. Press <kbd>Enter</kbd> (or pause) and the paragraphs fill with the Wikipedia entry for the word, in a second font you choose the same way. Ligatures can be switched on. Light and dark mode.
- **Outline editor** (Google fonts only, so no installed font is modified). See below.
- **Your own fonts** are read from the computer, grouped by their real family names, and never uploaded.

## Running it

It is plain static files. To use it locally, serve the folder and open it in **Chrome or Edge**:

```bash
python -m http.server 4400
```

Then open <http://localhost:4400>, click the font name above the headline to open the dial, and (for your own fonts) switch to **My fonts** and allow access when the browser asks.

| | Google tab | My fonts tab |
|---|---|---|
| Chrome, Edge, Opera (desktop) | yes | yes (needs `https://` or `localhost`) |
| Firefox, Safari | yes | tab is hidden: the browser can't list installed fonts |
| Phones | opens with a "best on a desktop" notice you can dismiss | not available |
| Tablets | yes, with a finger instead of a mouse | not available |

Opening `index.html` straight from disk won't work: the page loads its data with `fetch`, and installed fonts need a secure origin.

### Files

| File | What it is |
|---|---|
| `index.html`, `style.css`, `app.js` | the page, its styles and all its logic |
| `tagicons.js` | one small line icon per filter tag |
| `gfonts.v2.json` | the Google Fonts list with tags (generated, see below) |
| `gfonts.py` | rebuilds `gfonts.v2.json` |
| `.github/workflows/refresh-fonts.yml` | runs `gfonts.py` daily and commits the file if it changed |

### Updating the Google Fonts list

```bash
python gfonts.py
```

This downloads the family list from Google Fonts and the tag scores from the `google/fonts` repository, and keeps tags scored 50 or more. It refuses to overwrite the file with a list that looks truncated.

## The outline editor

Press the pen key beside `fi` (it appears when the headline font is a Google font). The headline's outlines open full screen on a grid.

| Do this | To get this |
|---|---|
| Scroll | zoom at the pointer |
| <kbd>Space</kbd> + drag (or middle / right drag) | pan |
| Drag a point | move it (its handles go with it) |
| Drag inside a shape | select and move the whole shape |
| Drag a curve | bend it (a straight edge turns into a curve) |
| Double-click a point | round it (lines become curves), or make it sharp |
| Double-click an outline | add a point there |
| <kbd>Shift</kbd> + click, or drag on empty space | add to the selection |
| <kbd>Delete</kbd> | remove the selected points |
| <kbd>Ctrl</kbd>+<kbd>C</kbd> / <kbd>X</kbd> / <kbd>V</kbd>, <kbd>Ctrl</kbd>+<kbd>D</kbd> | copy, cut, paste, duplicate a whole shape (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> pastes in place) |
| Arrow keys | nudge by a grid step (<kbd>Shift</kbd>: one unit) |
| <kbd>Ctrl</kbd>+<kbd>Z</kbd>, <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd> | undo, redo |
| <kbd>P</kbd> | pen mode: click for a corner point, click and drag for a curve, click the first point or press <kbd>Enter</kbd> to close, <kbd>Esc</kbd> to cancel |
| <kbd>H</kbd> | hide points and grid to preview the shape |
| <kbd>?</kbd> | the shortcuts drawer |

Snap to grid is on by default. **Download SVG** and **Copy SVG** export the edited outlines. Edits are not saved: they live until you close the editor.

Outlines come from the fonts' static `.woff` files on [Fontsource](https://fontsource.org/), parsed in the browser with opentype.js. TrueType curves are stored as many small quadratic pieces, so the editor converts them to cubic Béziers and shows the points the font only implies as small dots.

## Privacy

Nothing you type or any font on your computer is uploaded. Three kinds of request do leave the page:

- **Wikipedia:** the word in the headline is sent to the Wikipedia API to fetch the article.
- **Google Fonts:** fonts for the Google tab are loaded from Google's servers, which see the visitor's IP address.
- **jsDelivr:** only when the outline editor is opened, opentype.js and the font's outline file are fetched from the jsDelivr CDN.

There is no analytics and there are no cookies. The page stores a few settings (last tab, font choices, theme) and a cache of installed-font names in `localStorage`.

## Credits

- Layout and interaction inspired by [Kostić Type Foundry](https://kostictype.com/)'s homepage type tester.
- The font dial is modelled on Framer's [Circle Wrap](https://framer.com/m/Circle-Wrap-OvEV.js) component.
- Visual style after [Drams](https://drams.framer.website/) (Dieter Rams / Teenage Engineering inspired components).
- Fonts: [Google Fonts](https://fonts.google.com/) (each under its own OFL or Apache licence). Filter tags from the [`google/fonts`](https://github.com/google/fonts/tree/main/tags) repository.
- Outline files: [Fontsource](https://fontsource.org/). Font parsing: [opentype.js](https://github.com/opentypejs/opentype.js) (MIT).
- Article text from [Wikipedia](https://en.wikipedia.org/), licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/); the article and licence are credited on the page.
- The text cursor takes its curled-bracket shape from the [Phosphor](https://phosphoricons.com/) icon set (MIT).
- The click sound is synthesised in code (Web Audio), so there is no audio file.

## Licence

Not chosen yet. Add a `LICENSE` file and replace this line before the code is published.
