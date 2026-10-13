# Type Library

A type tester for the fonts installed on your computer, plus the full Google Fonts catalogue. Type a word, spin the font wheel, and see it set large, with a Wikipedia article on that word underneath in a second font.

Inspired by [Kostić Type Foundry](https://kostictype.com/)'s homepage tester. The font wheel is modelled on Framer's "Circle Wrap" component.

## Features

- **Your installed fonts**, grouped by their real family names (read from each font file), with Windows' own fonts hidden.
- **Google Fonts** tab with 1,828 families. Wheel labels load only the letters they need; full fonts load when picked.
- **Font wheel**: a slice of a large rotating dial. Scroll, drag, click or use the arrow keys. Whatever stops at the dot is applied, with a soft click as each font passes.
- **Headline + article**: the headline fits itself to the width. Pressing Enter (or pausing) fills the article with the Wikipedia entry for the word, editable in place.
- Every weight and italic of the selected family, ligatures toggle, download the headline's font file (or open its Google Fonts page), light/dark mode.

## Run it

Reading installed fonts needs Chrome or Edge, and the page must be served from `localhost` (opening the file directly won't work):

```bash
python -m http.server 4400
```

Then open <http://localhost:4400>, click the font name above the headline, and allow access to fonts. Without access, My fonts stays empty and asks for it; the Google tab works either way.

The first visit reads every installed font file once to get its family name, then caches the result.

## Updating the Google Fonts list

`gfonts.json` is a saved copy of Google's catalogue. To pick up newly added families:

```bash
python gfonts.py
```

## Privacy

Nothing is uploaded. Two things do go over the network:

- Words you type in the headline are sent to the Wikipedia API to fetch the article.
- Google Fonts are loaded from Google's servers, which sees the visitor's IP address.

## Credits

- Article text from [Wikipedia](https://en.wikipedia.org/), licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- Fonts in the Google tab from [Google Fonts](https://fonts.google.com/) (OFL / Apache licences).
- Click sound: synthesised in code (Web Audio), so there is no audio file.
