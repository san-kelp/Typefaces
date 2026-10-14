# Refresh gfonts.json from Google's public catalogue: python gfonts.py
# Family list: fonts.google.com/metadata/fonts. Tags (the Feeling / Appearance filters on fonts.google.com):
# tags/all/families.csv in github.com/google/fonts, a 0-100 score per family and tag; we keep scores of 50 and up.
import csv, io, json, urllib.request
GROUPS = ('Expressive', 'Theme', 'Seasonal', 'Monospace')    # Feeling = Expressive; Appearance = the rest
MIN = 50

def get(url): return urllib.request.urlopen(url).read().decode()

t = get('https://fonts.google.com/metadata/fonts')
d = json.loads(t[t.index('{'):])
fams = sorted(([f['family'], ','.join(f['fonts'])] for f in d['familyMetadataList']
               if 'latin' in f['subsets'] and not f['family'].startswith('Material') and 'icon' not in f['family'].lower()),
              key=lambda x: x[0].lower())

rows = [r for r in csv.reader(io.StringIO(get('https://raw.githubusercontent.com/google/fonts/main/tags/all/families.csv'))) if len(r) == 4]
tags = sorted({r[2] for r in rows if r[2].split('/')[1] in GROUPS and float(r[3]) >= MIN},
              key=lambda s: (GROUPS.index(s.split('/')[1]), s))
ix = {t: i for i, t in enumerate(tags)}
by = {}
for fam, _, tag, score in rows:
    if tag in ix and float(score) >= MIN:
        by.setdefault(fam, []).append(ix[tag])

out = {'tags': [t.lstrip('/') for t in tags], 'f': [[n, v, sorted(by.get(n, []))] for n, v in fams]}

# A scheduled run must never replace a good file with a broken one: refuse anything that looks truncated.
tagged = sum(1 for f in out['f'] if f[2])
if len(fams) < 1000 or len(tags) < 30 or tagged < 1000:
    raise SystemExit(f'refusing to write: {len(fams)} families, {len(tags)} tags, {tagged} tagged')
open('gfonts.json', 'w', encoding='utf8').write(json.dumps(out, separators=(',', ':')))
print(len(fams), 'families,', len(tags), 'tags,', sum(1 for f in out['f'] if f[2]), 'tagged')
