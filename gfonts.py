# Refresh gfonts.json from Google's public catalogue: python gfonts.py
import json, urllib.request
t = urllib.request.urlopen('https://fonts.google.com/metadata/fonts').read().decode()
d = json.loads(t[t.index('{'):])
out = sorted(([f['family'], ','.join(f['fonts'])] for f in d['familyMetadataList']
              if 'latin' in f['subsets'] and not f['family'].startswith('Material') and 'icon' not in f['family'].lower()),
             key=lambda x: x[0].lower())
open('gfonts.json', 'w', encoding='utf8').write(json.dumps(out, separators=(',', ':')))
print(len(out), 'families')
