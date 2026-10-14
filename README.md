# Radiestezia — Curs în 18 niveluri

**Versiune:** 1.1.0 · **Ultima actualizare:** 14 octombrie 2026

Curs offline despre radiestezie (pendul, baghete, geobiologie), într-un singur fișier HTML, prezentat ca tradiție și exercițiu de atenție, nu ca metodă validată științific.

**Live:** https://chiuta.github.io/Radiestezie/

![Captura de ecran](screenshot.png)

## Ce este

Un curs în limba română, cu 18 niveluri, plus glosar, o secțiune despre cercetarea științifică, o metodologie, un jurnal de practică și 9 anexe de context internațional (România, Europa, Asia, Africa, Australia și Oceania, America de Sud, America Centrală și Caraibe, America de Nord, alte regiuni). Fiecare nivel are teorie, o „Aplicație practică” cu listă de bifat și o autoevaluare cu întrebări deschise.

Textul spune de la început că radiestezia este clasificată de comunitatea științifică drept pseudoștiință și că testele controlate nu au arătat rezultate peste hazard. Cursul predă tehnica și vocabularul tradiției, plus limitele ei.

## Funcții

Verificate în cod și în browser:
- Navigare pe 32 de secțiuni (meniul din stânga, ☰ pe mobil), căutare în cuprins (fără diacritice), progres de parcurgere, link direct către fiecare secțiune (`#l5`, `#jurnal` etc.) și butonul Înapoi al browserului.
- Test demonstrativ al efectului ideomotor (Nivelul 1; fără accelerometru, de exemplu pe desktop, trece automat la varianta cu cursorul): accelerometrul telefonului înregistrează 8 secunde de micro-mișcări ale mâinii și desenează un grafic. Nu detectează „energii”.
- Variantă fără senzori a aceluiași test (Nivelul 1, „Fără senzor de mișcare”): pentru desktop sau telefoane fără accelerometru accesibil, măsoară 8 secunde de deplasări involuntare ale cursorului sau degetului față de punctul de pornire și le desenează pe grafic. Testată în browser cu mișcări simulate; nu detectează „energii”.
- Diagrame SVG animate la cerere, mod „lite” (fără diagrame), ținte de atingere mai mari la căsuțele de bifat.
- Liste de bifat cu contor de progres (implicit doar în pagina deschisă; opțional se pot păstra în browser, vezi mai jos).
- Jurnal de practică cu câte o notiță pe nivel, descărcabil ca `.txt` sau `.md`; caseta opțională „Păstrează jurnalul și bifele în acest browser” (dezactivată implicit) le salvează în `localStorage`, necriptat, iar debifarea șterge copia.
- „Copiază citarea acestei secțiuni”, „Extrage sursele menționate” (descarcă un `.txt`) și un rezumat de un ecran al Nivelului 14 (limite de sănătate), descărcabil.
- Tipărire: se tipărește secțiunea afișată.

## Manual de utilizare

1. Deschide pagina și citește „Nota introductivă” de pe prima pagină.
2. Alege un nivel din meniu sau apasă „Începe Nivelul 01”. Pe mobil, meniul se deschide cu ☰ și se închide cu Esc sau atingând fundalul.
3. La Nivelul 1 poți face testul de 8 secunde cu telefonul (browserul cere permisiune pentru senzorul de mișcare; pe iOS apare o fereastră de confirmare).
4. Fă exercițiile din „Aplicație practică” și bifează-le.
5. Scrie notițe în „Jurnalul meu de practică” și descarcă-le înainte să închizi pagina: implicit nu se salvează în browser (opțional, bifează „Păstrează jurnalul și bifele în acest browser”).
6. Pentru context critic, citește secțiunea „Cercetarea științifică” și anexele internaționale.

## Confidențialitate și rețea

- Stocare: implicit aplicația nu folosește `localStorage`, `sessionStorage`, IndexedDB sau cookie-uri. Doar dacă bifezi tu „Păstrează jurnalul și bifele în acest browser”, notițele și bifele (necriptate) se salvează în `localStorage` (chei `radiestezie.*`); debifarea le șterge. Altfel, notițele din jurnal și bifele există doar cât timp pagina e deschisă; la închidere browserul avertizează dacă există notițe nesalvate.
- Rețea: la încărcare nu se face nicio cerere externă (verificat în browser). Politica de securitate din pagină (`Content-Security-Policy`, scriptul autorizat prin hash SHA-256, fără `'unsafe-inline'` pentru scripturi) blochează orice altă resursă externă.
- Singurul link extern este reportajul Digi24 citat în anexa România; se deschide doar dacă îl apeși (într-o filă nouă, cu `noopener`).
- Permisiuni: doar senzorul de mișcare (accelerometru), numai când apeși „Pornește testul”. Nu se trimite nimic nicăieri.
- Fișierele (jurnal, surse, rezumat) se generează local în browser și se descarcă pe dispozitivul tău.

## Limite și avertismente

- Radiestezia nu are validare științifică. Mișcarea pendulului sau a baghetelor este explicată prin efectul ideomotor; testele controlate nu arată rezultate peste hazard.
- Nu o folosi pentru diagnostic, alegerea unui tratament sau a unei doze, evaluarea sănătății unui copil sau a siguranței alimentelor. Pentru urgențe sună la 112.
- Nu o folosi pentru decizii financiare, juridice, imobiliare sau de construcție (foraje, săpături, cumpărarea sau renovarea unei locuințe). Înainte de orice săpătură, verifică oficial poziția rețelelor de utilități.
- Anexele internaționale sunt documentare din surse publice online, fără contactarea organizațiilor citate (conform secțiunii de metodologie din aplicație). Prețurile și denumirile cursurilor se schimbă; verifică sursele originale. Unele date istorice (titluri de cărți, anul unor asociații) nu au fost verificate independent.
- Testul de accelerometru depinde de dispozitiv și browser; pe desktop de obicei nu funcționează.

## Rulare locală / offline

Descarcă `index.html` și deschide-l în browser; nu are dependențe externe. Pe GitHub Pages funcționează identic.

## Istoric / Changelog

### 1.1.0 — 2026-10-14
- Copie de rezervă și etichetare date (fff-kit).

### 1.0.0 — 12 octombrie 2026
- Versiunea și data ultimei actualizări sunt afișate în aplicație (secțiunea „Metodologie & ultima verificare”).

### 11.10.2026 (a treia actualizare) — 11 octombrie 2026
- Corectat: pe desktop, „Pornește testul” (cu senzor) nu făcea nimic util; acum, dacă senzorul lipsește sau nu trimite date în 2 secunde, trece automat la varianta cu cursorul/degetul, cu un mesaj clar.
- Jurnal și bifele: păstrare opțională în browser (dezactivată implicit, cu avertisment că stocarea e necriptată).

### 11.10.2026 (a doua actualizare) — 11 octombrie 2026
- Securitate: CSP cu `script-src` pe hash SHA-256, fără `'unsafe-inline'` pentru scripturi.
- Nivelul 1: test ideomotor alternativ, cu cursorul sau degetul, pentru dispozitivele fără senzor de mișcare (în loc de simplul mesaj că testul nu funcționează pe desktop).

### 11.10.2026 — 11 octombrie 2026
- Accesibilitate: avertismentul de subsol nu mai este un reper contentinfo imbricat în main (devine notă); verificare axe fără încălcări.

## Licență

Licența nu este încă declarată.

## Autor

Alexio — Alexandru-Ionuț Chiuță, contact: alexio@trom.tf

## English summary

A single-file, offline Romanian-language course on dowsing (radiesthesia) in 18 levels, with a glossary, a research section, nine international appendices and a downloadable practice journal. It states plainly that dowsing is classified as pseudoscience and that controlled tests show chance-level results, and it forbids medical, financial or construction decisions based on it. No external requests, no cookies, no browser storage; journal notes live only in the open page and can be downloaded.
