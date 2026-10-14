"""A no-dependency smoke test: serves the project, loads test/smoke.html in headless Chrome, prints PASS/FAIL lines.
Run: python test/smoke.py   (needs Chrome, Chromium or Edge installed)"""
import functools, http.server, os, re, shutil, subprocess, sys, threading

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CANDIDATES = ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser', 'chrome', 'msedge',
              r'C:\Program Files\Google\Chrome\Application\chrome.exe',
              r'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe',
              r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe']
browser = next((c for c in CANDIDATES if shutil.which(c) or os.path.isfile(c)), None)
if not browser:
    sys.exit('no Chrome/Chromium/Edge found')

handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=ROOT)
handler.log_message = lambda *a, **k: None
server = http.server.ThreadingHTTPServer(('127.0.0.1', 0), handler)
threading.Thread(target=server.serve_forever, daemon=True).start()
url = f'http://127.0.0.1:{server.server_address[1]}/test/smoke.html'

html = subprocess.run([browser, '--headless=new', '--disable-gpu', '--no-sandbox', '--virtual-time-budget=20000',
                       '--dump-dom', url], capture_output=True, text=True, timeout=120).stdout
m = re.search(r'<pre id="result">(.*?)</pre>', html, re.S)
result = m.group(1).strip() if m else 'no result in the page'
print(result)
sys.exit(0 if result.endswith('DONE') and 'FAIL' not in result else 1)
