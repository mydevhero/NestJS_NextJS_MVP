# 🧠 QuizLogic MVP

Un'applicazione Full-Stack per quiz di logica, progettata con un'architettura moderna che bilancia sicurezza, prestazioni SEO (SSR) e interattività (CSR).

## 🚀 **Avvio Rapido**

### **Prerequisiti**
- Node.js 24+ & pnpm (npm install -g pnpm)
- Docker & Docker Compose

### **Installazione**
```bash
# Clone repository
git clone https://github.com/mydevhero/NestJS_NextJS_MVP.git
cd NestJS_NextJS_MVP
```

### **Setup**
```bash
./setup.sh
```

### Avvio backend (NestJS) e frontend (NextJS)

Nella root del progetto

```bash
pnpm dev
```
---

## 🏛️ Note architetturali

### 1. Architettura del Backend ("NestJS, OpenAPI, DTO, class-validator e TypeScript" = "robustezza")

Ho scelto **NestJS** come framework backend.

* **Perché:** A differenza di Express puro, NestJS impone una struttura a controller, service e moduli (*Separation of Concerns*) che rende il codice testabile e manutenibile, oltretutto offre una piattaforma consolidata ed efficiente.
* **Modularità Enterprise:** Ogni risorsa (Quiz, User, Answer) è incapsulata in un modulo autonomo con i propri Controller, Service e Provider.
* **Documentazione Automatica (Swagger):** Negli esempi ho integrato **OpenAPI (Swagger)**, integrati dalla propria una documentazione interattiva.
* **Contratti Dati (DTO & Validation):** Non esiste scambio dati che non sia validato. Utilizzo `class-validator` e `class-transformer` per garantire che i payload in ingresso siano coerenti, trasformando gli errori di validazione in risposte HTTP 400 automatiche.
* **TypeScript:** Ogni parte del codice ha una sua tipizzazione, evidenziando 'sviste e errori' prima dell'esecuzione dei codici

### 2. Data Integrity & Persistence (Prisma ORM)

Per l'interazione con il database ho scelto **Prisma**.

* *Perché:* È un ORM *Type-safe*. Se cambiamo il nome di una colonna nel database, TypeScript ci segnalerà l'errore in tutto il codice backend.
* **Relational Mapping:** Ho gestito relazioni complesse (Utente -> Risposta -> Quiz) per permettere il calcolo in tempo reale della classifica (Leaderboard) senza appesantire il database.


### 3. Strategia di Rendering: Next.js

Ho sfruttato la natura ibrida di Next.js per massimizzare sia le performance che l'esperienza utente.

* **SSR (Server-Side Rendering) per i dati pubblici:** Pagine come la *Classifica* e il *Dettaglio Quiz* vengono generate sul server.
* *Perché:* Questo permette di servire HTML pronto all'uso, migliorando il **First Contentful Paint (FCP)** e garantendo l'indicizzazione SEO dei contenuti.
* **CSR (Client-Side Rendering) per l'interattività:** Le card dei quiz utilizzano `'use client'` per gestire lo stato locale complesso (selezione opzioni, timer, feedback dinamico).
* **Hydration e Streaming:** L'uso dei Server Components permette di ridurre drasticamente il bundle JavaScript inviato al client, caricando solo ciò che è necessario per l'interazione.


### 4. DevOps e Infrastruttura: Docker & Automation

Il progetto è stato concepito per essere "zero-config" grazie all'uso di **Docker** e dello script di setup.

* **Dockerization:** Il db in sviluppo è testato in un container, ma è possibile far lavorare l'intera infrastruttura con Docker.
* *Perché:* Garantisce l'uniformità degli ambienti. Lo sviluppatore A e lo sviluppatore B lavorano esattamente sulla stessa versione di Node, database e dipendenze, eliminando il problema del "sul mio computer funziona".
* **Script di setup (`setup.sh`):** Gestisce il ciclo di vita iniziale del progetto.
  + Crea le directory del backend e del frontend usando i comandi nativi di NestJS e NextJS.
  + Installa le dipendenze e genera il client Prisma.
  + Eseue le migrazioni del database e il seeding dei dati iniziali.
  + Copiando nelle i file specifici per questa applicazione nelle rispettive posizioni.

### 5. Strategia di Sicurezza "Reveal-on-Demand"

Una delle sfide principali di un'app di quiz è impedire agli utenti di barare ispezionando il codice, invece di inviare tutte le informazioni del quiz (comprese le spiegazioni) al caricamento della pagina, ecco come ho scelto di **proteggere i dati**.

* **Il Problema:** Se la spiegazione fosse nel JSON iniziale, un utente esperto potrebbe leggerla dal traffico di rete tramite i DevTools del browser o dallo stato di React per trovare la risposta corretta prima di rispondere.
* **La Soluzione:** Le spiegazioni dei quiz sono omesse dal payload della dashboard iniziale, si riceveranno dal server solo **dopo** che è stata salvata una risposta nel database. Il backend restituisce il feedback e la spiegazione atomicamente nella risposta della `POST`.

### 6. Frontend: Next.js 15 Ibrido (SSR + CSR)

Il frontend non è una semplice Single Page Application (SPA), ma un sistema ibrido.

* **Server-Side Rendering (SSR):** Usato per la **Classifica** e il **Dettaglio Quiz**.
* *Perché:* Velocità di caricamento (First Contentful Paint) e SEO. I dati arrivano già pronti dal server.


* **Client-Side Rendering (CSR):** Usato per le **QuizCard**.
* *Perché:* Per gestire stati interattivi complessi (feedback dei colori, selezione opzioni, caricamenti) senza ricaricare la pagina, offrendo un'esperienza "app-like".

### 7. UI/UX: Responsive grid & micro-interazioni

La UI è stata costruita con **Tailwind CSS**, seguendo un approccio minimalista ma funzionale.

* **Griglia Dinamica:** Ho implementato una visualizzazione a card compatte con radio-button simulati.
* *Perché:* Per ottimizzare lo spazio su dispositivi mobili e permettere all'utente di avere una visione d'insieme su molti quiz contemporaneamente.
* **Identità Visiva:** L'uso di una palette "Slate & Blue" è tipica dei software educational.
* **Micro-interazioni:** Pulsanti radio simulati e feedback cromatici istantanei (Verde/Rosso) migliorano l'engagement dell'utente senza sovraccaricare il carico cognitivo.

### 8. Autenticazione utente

Il sistema di autenticazione è elementare, non esiste alcun vincolo legato da password né si usano altri fattori di autenticazione, lascio la libertà allo sviluppatore di pensare all'intero sistema secondo le sue esigenze. Per accedere all'area privata si usa solo il nickname degli utenti fittizi:

| Nickname |
|--------- |
| Alice    |
| Bob      |
| Charlie  |

### 9. Gestione Sessioni: Cookie-Based auth (SSR Friendly)

Invece di utilizzare il classico `localStorage` per i token, ho optato per una gestione della sessione tramite **Cookie**, inoltre essendo solo un semplice MVP non ci sono sistemi di autenticazione esterni o JWT complessi:

* *Perché:* I componenti server di Next.js (SSR) non possono accedere al `localStorage` del browser. Utilizzando i Cookie, il server può leggere l'identità dell'utente durante la fase di generazione della pagina.
* *Risultato:* Possiamo decidere se mostrare o meno il tasto "Logout" o i dati dell'utente direttamente nell'HTML iniziale, evitando il fastidioso "effetto lampeggio" (Layout Shift) tipico delle Single Page Application tradizionali.
* Il cookie trasporta solo ID, email e nickname dell'utente.
* L'utilizzo di cookie permette ai 'Server Components' di accedere ai dati dell'utente istantaneamente durante il rendering, evitando il "salto" di contenuto (layout shift) tipico delle app che caricano i dati solo lato client.

---

## 🛠️ Riassunto dello stack tecnologico

| Tecnologia | Utilizzo | Perché? |
| --- | --- | --- |
│ **Package Manager**: pnpm │ Più rigido ed efficiente di npm |
| **Database**: | PostgreSQL | Perché è magnifico |
| **NestJS**: | Backend API | Struttura modulare ed enterprise-grade |
| **Prisma**: | ORM | Type-safety e facilità di migrazione DB |
| **Swagger**: | API Doc | Documentazione vivente e testing semplificato |
| **Validazione**: | class-validator & DTOs per un contratto dati rigoroso tra FE e BE |
| **Docker**: | Deployment | Portabilità assoluta tra ambienti diversi |
| **Next.js**: | Frontend Framework | Ottime performance grazie a Server Components |
| **Tailwind CSS**: | Styling | Sviluppo UI rapidissimo e design system coerente |
│ **Testing**: | Jest + Supertest │ Verifichiamo che tutto sia funzionante prima di andare in produzione |
---

## Informazioni avanzate

### **Lancio della suite di test**

**Unit Tests**
```bash
pnpm test
```

**E2E Tests**
```bash
pnpm test:e2e
```

# Build per la produzione
```bash
pnpm build
```


## 🔧 **Variabili d'ambiente**

### **Backend (.env)**
```env
# DATABASE_URL="postgresql://user:password@localhost:5432/quiz_db"
```

#### **Quiz Management**
- `GET /quiz` - List all quizzes with completion status
- `GET /quiz/:id` - Get quiz details with explanation
- `POST /quiz/:id/answer` - Submit answer to quiz
- `GET /quiz/leaderboard` - Get user rankings

### **API Documentation**
Access Swagger UI at: `http://localhost:3000/api` when backend is running

## 🔐 **Authentication Flow**
1. User submits nickname via `/auth/login`
2. System checks if user exists in database
3. If new user, creates account automatically
4. Returns user data for frontend session management
5. (Future) JWT token implementation

## 📈 **Features Implemented**

### ✅ **Completed**
- [x] Fullstack TypeScript setup
- [x] Dockerized development environment
- [x] PostgreSQL with Prisma ORM
- [x] REST API with NestJS
- [x] Modern frontend with NextJS 14
- [x] Complete quiz system (CRUD + answers)
- [x] User authentication system
- [x] Leaderboard functionality
- [x] API documentation with Swagger
- [x] Comprehensive testing setup
- [x] Type-safe DTOs with validation


## 🚢 **Deployment Options**

### **Recommended (Free Tier)**
- **Frontend**: Vercel (NextJS optimized)
- **Backend**: Railway or Render
- **Database**: Railway PostgreSQL or Supabase

### **Production Commands**
```bash
# Build for production
pnpm build

# Docker production build
docker-compose -f docker-compose.prod.yml up -d
```

## 🛠️ **Development Guidelines**

### **Code Style**
- **TypeScript**: Strict mode enabled
- **Formatting**: Prettier configuration
- **Linting**: ESLint with custom rules
- **Commits**: Conventional commit messages



## 🆘 **Troubleshooting**

### **Common Issues**

1. **Database connection failed**
   ```bash
   # Check if PostgreSQL is running
   docker ps | grep quiz_db

   # Reset database
   docker-compose down -v
   docker-compose up
   ```

2. **Port already in use**
   ```bash
   # Change ports in docker-compose.yml
   ports:
     - "5433:5432"  # Different host port
   ```

3. **Prisma migrations**
   ```bash
   # Generate migrations
   npx prisma migrate dev

   # Reset database
   npx prisma migrate reset
   ```

### **Development Tips**
- Use `docker-compose logs -f` to monitor all services
- Prisma Studio available at `http://localhost:51212`
- API documentation at `http://localhost:3001/api/docs`
- Frontend hot reload on `http://localhost:3000`

## 📚 **Learning Resources**

- [NestJS Documentation](https://docs.nestjs.com/)
- [NextJS Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Docker Compose Reference](https://docs.docker.com/compose/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 👥 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Commit changes following conventional commits
4. Push to the branch
5. Open a Pull Request

## 📄 **License**

Nessuna licenza, solo impara divertendoti

---

**Maintained by**: Alessandro Bianco
**Contact**: mydevhero@gmail.com

---



troubleshoting

se vuoi cambiare i dati ambiente, agisci sui valori di default di bin/configure_env.sh
per ogni variabile che modifichi ricorda di fare unset nell'ambiente per eliminare quella vecchia in modo da settare il nuovo valore di default
poi nel backend lancia pnpm prisma:generate per dargli la nuova DATABASE_URL
test:

docker exec quiz_db psql -U $POSTGRES_USER -d $POSTGRES_DB -c "SELECT current_database();"
(fare uno script in bin per questo sopra)

aggiungi pnpm prisma:studio nella doc

Una piccola chicca per il tuo README

Nelle istruzioni di avvio, potresti aggiungere una sezione "Troubleshooting":

    "Se ricevi l'errore EADDRINUSE, significa che un'istanza precedente di NestJS è ancora attiva. Usa lsof -i :3001 per trovare il PID e kill -9 <PID> per chiuderlo."

*Built with ❤️ using modern web technologies*
