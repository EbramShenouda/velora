# VELORA - Atelier Botanico (E-Commerce 3D)

Applicazione web di produzione moderna, fluida e responsive (PC, Android, iOS) per **VELORA - Atelier Botanico**, sviluppata secondo i principi della **Clean Architecture** con **React + Vite + TypeScript + Tailwind CSS** e **Three.js**.

---

## 🏛️ Architettura del Progetto (Clean Architecture)

```
c:\workspace\velora\
├── .env                       # Variabili d'ambiente (Brand, GPS, Soglia Spedizione, API)
├── .env.example               # Template per CI/CD e configurazioni
├── index.html                 # Entry point con Google Fonts (Cormorant Garamond, Plus Jakarta Sans)
├── package.json               # Dipendenze (React, Vite, Three.js, Lucide, Tailwind)
├── tailwind.config.js         # Palette ufficiale (botanical, cream, ivory, petal, blush, clay, gold)
├── vite.config.ts             # Configurazione Vite con alias path `@/`
└── src/
    ├── config/
    │   └── siteConfig.ts      # Configurazione centralizzata tipizzata da variabili d'ambiente
    ├── types/
    │   └── catalog.ts         # Modelli di dominio (Product, Category, PromoOffer, FuneralConfig, CartItem, StoreSettings)
    ├── services/
    │   └── api.ts             # Service Layer astratto (REST API, Supabase, Haversine geodesico, Geocoding Nominatim)
    ├── context/
    │   ├── CatalogContext.tsx  # Stato globale catalogo, filtri per categoria, promozioni e modalità solenne 3D
    │   └── CartContext.tsx     # Carrello, calcolo spedizione gratuita >50€, biglietto a mano, validazione raggio 10km
    ├── components/
    │   ├── layout/
    │   │   ├── BrandLogo.tsx  # Logo SVG artistico per VELORA con monogramma floreale
    │   │   ├── Navbar.tsx     # Header glassmorphism, announcement bar, drawer mobile Android/iOS
    │   │   └── Footer.tsx     # Footer botanico con orari, indirizzo, link Google Maps e WhatsApp
    │   ├── home/
    │   │   ├── BackgroundFlower3D.tsx   # Three.js 3D Flower a pieno schermo con sboccio da scroll (12% -> 100%)
    │   │   ├── HeroParallax3D.tsx       # Aceternity 3D Hero Parallax a 3 tracce con piano inclinato
    │   │   ├── Catalog3DTiltGrid.tsx    # Card prospettiche 3D con profondità Z e riflesso glare cursore
    │   │   ├── AppleCardsCarousel.tsx   # Carosello con le quattro collezioni esclusive di VELORA
    │   │   ├── BoutiqueDeliveryMap.tsx  # Bottega a Tor Lupara & Consegne in tutta Roma con mappa interattiva
    │   │   ├── FuneralConfigurator.tsx  # Configuratore Arte Funebre con nastro oro e luce solenne Three.js
    │   │   └── CartDrawer.tsx           # Carrello laterale con anteprima calligrafica live e checkout WhatsApp
    │   └── admin/
    │       ├── ProductAdminModal.tsx      # Modale CRUD per gestione prodotti, promozioni e stock
    │       ├── ProductFormModal.tsx       # Modale di Creazione/Modifica con foto, stock e toggle offerta
    │       ├── ImageUploadDropzone.tsx    # Upload Drag&Drop, scatto fotocamera smartphone e URL
    │       └── AnnouncementBarEditor.tsx  # Editor in tempo reale del Top Announcement Bar
    ├── pages/
    │   ├── HomePage.tsx       # Pagina principale dell'Atelier Botanico
    │   └── AdminPage.tsx      # Dashboard protetta da JWT / Auth per il proprietario del negozio
    ├── App.tsx                # Root Provider composable con routing / e /admin
    ├── main.tsx               # Bootstrap React 18
    └── index.css              # Stili globali, classi di utilità glass e font calligrafico

velora-backend/                # Backend REST API Spring Boot 3 (Java 21) + MongoDB
├── Dockerfile                 # Multi-stage image ultra-leggera Alpine JRE
├── pom.xml                    # Spring Boot 3.3.4, Spring Security, JWT (JJWT 0.12), Mongo
└── src/main/java/com/velora/
    ├── model/                 # Entità MongoDB (Product, StoreSettings, Order, User)
    ├── repository/            # Spring Data Mongo Repositories
    ├── security/              # Filtri JWT, BCrypt, SecurityConfig
    ├── controller/            # Endpoints pubblici e protetti /api/admin/**
    └── config/                # Seeder automatico admin (velora2026!) e catalogo iniziale
```

---

## 🎨 Palette Colori e Tipografia Ufficiale

Configurati in `tailwind.config.js`:
- **Font Serif**: `'Cormorant Garamond'`, Georgia, serif
- **Font Sans**: `'Plus Jakarta Sans'`, sans-serif
- **Font Calligrafico Biglietti**: `'Alex Brush'`, cursive
- **Palette Botanica**:
  - `botanical-50`: `#F4F7F4`
  - `botanical-100`: `#E3ECE4`
  - `botanical-200`: `#C5D8C7`
  - `botanical-600`: `#2D5A40`
  - `botanical-700`: `#214430`
  - `botanical-800`: `#163022`
  - `botanical-900`: `#0D1E15`
  - `botanical-950`: `#07110C`
  - `cream`: `#FAF7F2`
  - `ivory`: `#F2ECE1`
  - `petal`: `#F3D6CE`
  - `blush`: `#E8B4A8`
  - `clay`: `#C86D5B`
  - `gold`: `#D4AF37`

---

## 🌐 Configurazione Dinamica `.env`

Tutti i parametri commerciali e logistici sono configurabili all'esterno:

```env
VITE_BRAND_NAME="VELORA"
VITE_BRAND_TAGLINE="Atelier Botanico • Fiori & Piante a Tor Lupara e Roma"
VITE_STORE_ADDRESS="Via Nomentana 38, 00013 Tor Lupara (Fonte Nuova, RM)"
VITE_STORE_PHONE="+39 06 905 8412"
VITE_STORE_WHATSAPP="+393401234567"
VITE_STORE_LAT=41.9961
VITE_STORE_LNG=12.6028
VITE_DELIVERY_AREA="tutta Roma"
VITE_FREE_SHIPPING_THRESHOLD=50.0
VITE_STANDARD_DELIVERY_FEE=5.0
VITE_STORE_MAPS_QUERY="Via Nomentana 38 00013 Tor Lupara Fonte Nuova RM"
VITE_GOOGLE_MAPS_URL="https://www.google.com/maps/dir/?api=1&destination=Via+Nomentana+38+00013+Tor+Lupara+Fonte+Nuova+RM"
VITE_API_BASE_URL="http://localhost:8080/api/v1"
VITE_USE_MOCK_API="true"
```

---

## 📐 Funzionalità Tecniche Chiave

### 1. Rosa Rosa 3D Three.js Reattiva allo Scroll (`BackgroundFlower3D.tsx`)
- Sboccio organico di una **Rosa Rosa** vellutata a 5 cerchi concentrici (calice esterno, petali intermedi e bocciolo centrale a spirale) con sfumature dal rosa profondo al cipria setoso, stami dorati e particelle di polline fluttuanti.
- Apertura guidata dal delta scroll dal 12% (in cima alla pagina) fino al 100% (in fondo alla pagina).
- **Illuminazione solenne**: quando l'utente entra nella sezione *Arte Funebre*, i petali e le luci sfumano gradualmente da toni rosei a riflessi argentei lunari (`#dbeafe` e `#f1f5f9`).
- **Ottimizzazione Mobile (Android/iOS)**: `devicePixelRatio` ottimizzato su smartphone, geometrie curve efficienti e frame rate fluido a 60 FPS senza surriscaldamento.

### 2. Bottega a Tor Lupara & Consegne in Tutta Roma (`BoutiqueDeliveryMap.tsx`)
- Finestra interattiva con Google Maps integrata con coordinate e indirizzo esatto: **Via Nomentana 38, 00013 Tor Lupara (Fonte Nuova, RM)**.
- Pulsante dedicato con avvio istantaneo della navigazione turn-by-turn su Google Maps / Apple Maps.
- Garanzia di consegna espressa e accurata a domicilio su tutta l'area metropolitana di Roma.

### 3. Configuratore Nastro Funebre con Stampa in Lamina d'Oro (`FuneralConfigurator.tsx`)
- Preview reattiva del nastro in raso color crema con caratteri in lamina d'oro (max 45 caratteri).
- Selezione del luogo di celebrazione (Chiesa, Camera Ardente, Cimitero, Domicilio) e orario della funzione con passaggio diretto al carrello.

### 4. Carrello Avanzato e Checkout WhatsApp (`CartDrawer.tsx`)
- Barra animata con percentuale dinamica per la **spedizione gratuita sopra i 50,00 €**.
- Anteprima calligrafica in tempo reale del biglietto d'auguri su cartoncino avorio.
- Generatore di ordine diretto via **WhatsApp Business** con riepilogo formattato in markdown con emoji e totali per consegna in tutta Roma.

---

## 🚀 Avvio dell'Applicazione

```bash
# 1. Installazione dipendenze
npm install

# 2. Avvio ambiente di sviluppo
npm run dev

# 3. Compilazione TypeScript e Build di produzione
npm run build
```
