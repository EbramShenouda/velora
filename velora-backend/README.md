# VELORA Backend - Spring Boot 3 & MongoDB

Backend REST API per **VELORA - Atelier Botanico**, sviluppato con **Spring Boot 3 (Java 21)**, **Spring Data MongoDB** e **Spring Security con JWT**, ottimizzato per consumare pochissima RAM (meno di 128MB) e per essere deployato su **MongoDB Atlas Free Tier** e micro-VPS / PaaS gratuiti (Render, Railway, Fly.io, Oracle Cloud).

---

## 🚀 Architettura e Caratteristiche

- **Java 21 & Spring Boot 3.3.4**
- **Autenticazione Stateless JWT (JJWT 0.12.6)** con HMAC-SHA256
- **Database NoSQL MongoDB Atlas** con seed automatico al primo avvio (crea account `admin` / `velora2026!` e gli 8 prodotti iniziali)
- **JVM Low-Footprint Configuration**:
  - `-XX:+UseSerialGC`: minimizza l'impronta di memoria del garbage collector
  - `-Xss512k`: stack thread ridotto per risparmiare memoria
  - `-XX:MaxRAMPercentage=75`: allocazione intelligente della memoria nei container
- **Multi-Stage Dockerfile** basato su `eclipse-temurin:21-jre-alpine` (~180MB totale)

---

## 📡 Mappatura API REST

### Endpoints Pubblici:
| Metodo | Rotta | Descrizione |
|---|---|---|
| `POST` | `/api/auth/login` | Login amministratore (restituisce Bearer JWT Token) |
| `GET` | `/api/products` | Lista prodotti (supporta filtri `?category=bouquet` e `?promo=true`) |
| `GET` | `/api/products/{id}` | Dettaglio singolo prodotto |
| `GET` | `/api/settings` | Configurazione bottega e Top Announcement Bar |
| `POST` | `/api/orders` | Registrazione ordine dal carrello e notifica |

### Endpoints Protetti (Header `Authorization: Bearer <TOKEN>`):
| Metodo | Rotta | Descrizione |
|---|---|---|
| `POST` | `/api/admin/products` | Creazione nuovo prodotto con foto, prezzo, stock e offerte |
| `PUT` | `/api/admin/products/{id}` | Modifica completa o rapida (stock, offerta, giacenza) |
| `DELETE` | `/api/admin/products/{id}` | Eliminazione prodotto dal catalogo |
| `PUT` | `/api/admin/settings` | Aggiornamento banner annunci, festività e promozioni |
| `GET` | `/api/admin/orders` | Lista ordini per la preparazione in bottega |

---

## 🛠️ Avvio Locale

### Con Maven:
```bash
cd velora-backend
export SPRING_DATA_MONGODB_URI="mongodb://localhost:27017/velora"
mvn spring-boot:run
```

### Con Docker:
```bash
docker build -t velora-backend .
docker run -p 8080:8080 -e SPRING_DATA_MONGODB_URI="mongodb+srv://user:pass@cluster.mongodb.net/velora" velora-backend
```

