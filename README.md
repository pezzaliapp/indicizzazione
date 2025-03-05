# Indicizzazione

**Indicizzazione** è una Progressive Web App (PWA) che permette di inserire e indicizzare un elenco di valori espressi in euro (€). È utile per ripartire automaticamente un costo aggiuntivo su più valori inseriti, calcolando i nuovi importi in modo proporzionale.

## 📌 Funzionalità
- **Aggiunta di valori**: Inserisci un valore e aggiungilo alla lista.
- **Inserimento di costi aggiuntivi**: Inserisci un importo da distribuire sui valori esistenti.
- **Ricalcolo automatico**: I nuovi valori vengono calcolati in base all'importo aggiunto.
- **Compatibile con dispositivi mobili**: Utilizzabile su smartphone, tablet e desktop.
- **PWA**: Funziona anche offline grazie al Service Worker.

## 📂 Struttura dei file
- `index.html` → Interfaccia utente
- `app.js` → Logica di gestione e calcolo
- `style.css` → Stile e layout
- `manifest.json` → Configurazione PWA
- `service-worker.js` → Cache e funzionamento offline
- **Cartella `icon/`** con le icone `index-192.png` e `index-512.png`

## 🚀 Installazione e utilizzo
1. **Clona il repository**
   ```sh
   git clone https://github.com/tuo-username/Indicizzazione.git
   cd Indicizzazione
   ```
2. **Apri `index.html`** in un browser per testare l'app.
3. **(Opzionale) Avvia un server locale**
   ```sh
   npx serve .
   ```
   o utilizza Python:
   ```sh
   python -m http.server 8000
   ```
4. **Installa come PWA**
   - Su Chrome o Edge, clicca sull'icona di installazione accanto alla barra degli indirizzi.

## 🛠️ Tecnologie utilizzate
- **HTML, CSS, JavaScript** per il frontend.
- **PWA (Progressive Web App)** con Service Worker e manifest.json.

## 📜 Licenza
Questo progetto è open-source sotto licenza MIT.

---

🔗 **Visita il sito web:** [pezzaliapp.com](https://www.pezzaliapp.com)
