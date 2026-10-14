# Refresh gfonts.v2.json from Google's public catalogue: python gfonts.py
# The file name carries the data layout's version: bump it (and app.js) whenever the layout changes, so a browser
# or CDN holding an old copy can never be paired with code that expects a new one.
# Family list: fonts.google.com/metadata/fonts. Tags (the Feeling / Appearance filters on fonts.google.com):
# tags/all/families.csv in github.com/google/fonts, a 0-100 score per family and tag; we keep scores of 50 and up.
import csv, io, json, urllib.request
GROUPS = ('Expressive', 'Theme', 'Seasonal', 'Monospace')    # Feeling = Expressive; Appearance = the rest
MIN = 50
STYLE = ('Style/Serif', 'Style/Sans Serif', 'Style/Calligraphy')   # derived: from category/stroke and the Script tags
CALLIGRAPHY = ('/Script/Formal', '/Script/Upright Script')

def get(url): return urllib.request.urlopen(url).read().decode()

t = get('https://fonts.google.com/metadata/fonts')
d = json.loads(t[t.index('{'):])
meta = {f['family']: (f.get('category'), f.get('stroke')) for f in d['familyMetadataList']}
fams = sorted(([f['family'], ','.join(f['fonts'])] for f in d['familyMetadataList']
               if 'latin' in f['subsets'] and not f['family'].startswith('Material') and 'icon' not in f['family'].lower()),
              key=lambda x: x[0].lower())

rows = [r for r in csv.reader(io.StringIO(get('https://raw.githubusercontent.com/google/fonts/main/tags/all/families.csv'))) if len(r) == 4]
tags = sorted({r[2] for r in rows if r[2].split('/')[1] in GROUPS and float(r[3]) >= MIN},
              key=lambda s: (GROUPS.index(s.split('/')[1]), s))
tags = ['/' + t for t in STYLE] + tags
ix = {t: i for i, t in enumerate(tags)}
by = {}
for fam, _, tag, score in rows:
    if tag in ix and float(score) >= MIN:
        by.setdefault(fam, []).append(ix[tag])

calligraphy = {fam for fam, _, tag, score in rows if tag in CALLIGRAPHY and float(score) >= MIN}
for fam, (category, stroke) in meta.items():
    if stroke in ('Serif', 'Slab Serif') or category == 'Serif':
        by.setdefault(fam, []).append(ix['/Style/Serif'])
    elif stroke == 'Sans Serif' or category == 'Sans Serif':
        by.setdefault(fam, []).append(ix['/Style/Sans Serif'])
    if fam in calligraphy:
        by.setdefault(fam, []).append(ix['/Style/Calligraphy'])

out = {'tags': [t.lstrip('/') for t in tags], 'f': [[n, v, sorted(by.get(n, []))] for n, v in fams]}

# A scheduled run must never replace a good file with a broken one: refuse anything that looks truncated.
tagged = sum(1 for f in out['f'] if f[2])
if len(fams) < 1000 or len(tags) < 30 or tagged < 1000:
    raise SystemExit(f'refusing to write: {len(fams)} families, {len(tags)} tags, {tagged} tagged')
open('gfonts.v2.json', 'w', encoding='utf8').write(json.dumps(out, separators=(',', ':')))
print(len(fams), 'families,', len(tags), 'tags,', sum(1 for f in out['f'] if f[2]), 'tagged')
