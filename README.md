# Sito Web di Studio Capoferri – Progettazione Strutture in Acciaio

Benvenuti nel repository del sito web dello **Studio Capoferri**, specializzato nella progettazione strutturale in acciaio per edilizia civile e industriale.

Il sito fornisce informazioni sui servizi offerti, i progetti realizzati, i contatti e l'approccio tecnico-professionale dello studio.

📍 Dominio ufficiale: [www.studiocapoferri.eu](https://www.studiocapoferri.eu)

---

## 📁 Struttura del progetto

- **index.html**  
  Pagina principale con presentazione, immagine di copertina, slogan e sezioni principali.

- **chi-siamo.html** *(opzionale)*  
  Approfondimento sullo studio, esperienza e filosofia progettuale.

- **servizi.html** *(o sezione nella homepage)*  
  Elenco dei servizi offerti: progettazione acciaio, analisi FEM, consulenze tecniche, ecc.

- **progetti.html**  
  Galleria o descrizione dei progetti realizzati dallo studio.

- **contatti.html**  
  Recapiti, sede, email, telefono e modulo di contatto.

- **style.css**  
  Foglio di stile principale con tipografia, colori professionali, layout responsive, immagini e design coerente.

- **assets/**  
  Cartella immagini (es. logo, foto di strutture, background, icone, ecc.).

---

## ▶️ Come visualizzare localmente

### Metodo 1: Server Python (Consigliato)

Il modo migliore per testare il sito è usare il server Python incluso:

**Su Windows:**
```bash
# Doppio click su start-server.bat
# Oppure dalla riga di comando:
python server.py
```

**Su Linux/Mac:**
```bash
# Rendi eseguibile lo script (solo la prima volta)
chmod +x start-server.sh

# Esegui lo script
./start-server.sh

# Oppure direttamente:
python3 server.py
```

Il server si avvierà automaticamente su `http://localhost:8000/` (o su un'altra porta se 8000 è occupata).

### Metodo 2: Server HTTP Python standard

Se preferisci usare il comando standard di Python:
```bash
# Python 3
python3 -m http.server 8000

# Python 2 (non più supportato)
python -m SimpleHTTPServer 8000
```

Poi apri il browser su: `http://localhost:8000/`

### Metodo 3: Apertura diretta

Puoi anche aprire direttamente `index.html` con un browser, ma alcune funzionalità potrebbero non funzionare correttamente (es. fetch API, routing relativo).
