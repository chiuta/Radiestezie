// Surse confirmate (Enright 1999, Betz replică, USGS). Rulare: node tests/surse.test.mjs (static)
import fs from 'node:fs'; import path from 'node:path'; import {fileURLToPath} from 'node:url';
const HERE = path.dirname(fileURLToPath(import.meta.url)); const h = fs.readFileSync(path.join(HERE, '..', 'index.html'), 'utf8');
let ok = 0, bad = 0; const t = (n, c, x) => { if (c) { ok++; console.log('  ok  ', n); } else { bad++; console.log('  FAIL', n, x ?? ''); } };
const n = r => (h.match(r) || []).length;
t('Enright 1999 cu pagini în 8 limbi', n(/Testing dowsing\. <em>Skeptical Inquirer<\\?\/em> 1999;23\(1\):39–46/g) === 8);
t('replica Betz în 8 limbi', n(/Follow-up: dowsing successful/g) === 8);
t('USGS citat în 8 limbi, fără „de completat" pentru USGS', n(/usgs\.gov\/water-science-school\/science\/water-dowsing/g) === 8 && !/• USGS: /.test(h));
t('subtitlul neconfirmat nu mai apare', !/failure of the Munich experiments/.test(h));
t('versiune 2.0.2', JSON.parse(fs.readFileSync(path.join(HERE, '..', 'app.json'), 'utf8')).version === '2.0.2');
console.log(`\n${ok} reușite, ${bad} eșuate`); process.exit(bad ? 1 : 0);
