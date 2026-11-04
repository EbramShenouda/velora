# VELORA repository instructions

## Commands

Run frontend commands from the repository root:

```bash
npm install
npm run dev       # Vite at http://localhost:3000
npm run build     # production bundle
npm run preview   # serve the production bundle
```

The frontend has no configured lint script or test runner, so there is no frontend single-test command.

Run backend commands from `velora-backend` (Java 21 and MongoDB required):

```bash
mvn spring-boot:run
mvn test
mvn -Dtest=ClassName test
mvn -Dtest=ClassName#methodName test
mvn package
```

There are currently no backend test sources; use the Maven selectors above when tests are added. Set `SPRING_DATA_MONGODB_URI` before starting the API.

## Architecture

- The root is a React 18/Vite TypeScript storefront. `App.tsx` provides auth, catalog, and cart state, then uses a small browser-path/hash router for `/` and `/admin`; do not introduce a routing library for this flow without a wider migration.
- `src/types/catalog.ts` is the client domain contract. `siteConfig.ts` converts `VITE_*` environment values into typed store, delivery, and API configuration. The code reads `VITE_API_BASE_URL` and `VITE_USE_MOCK_API`; keep those names aligned when changing `.env.example`.
- `CatalogContext` owns products, promotions, store settings, and orders. `CartContext` derives totals and submits orders; `AuthContext` holds the admin token. These contexts persist their mock-mode state under versioned `velora_*` localStorage keys.
- `services/api.ts` is the boundary between the UI and the API. Mock mode is enabled unless `VITE_USE_MOCK_API` is exactly `false`; it uses the seeded client catalog and localStorage fallbacks. Keep client API payloads compatible with the Spring models when changing either side.
- `velora-backend` is a Spring Boot 3/MongoDB service. Public catalog, settings, and order endpoints are under `/api`; `/api/admin/**` is JWT-protected by `SecurityConfig`. Controllers operate through Spring Data repositories, and initial users, settings, and catalog data are seeded on startup.
- Product imagery is uploaded directly to Cloudinary with an unsigned preset in `cloudinaryService.ts`; image fields are normalized as both `img` and `imageUrl` where catalog data crosses the client/API boundary.

## Repository conventions

- Use the `@/` alias for frontend imports rooted at `src`; it is configured consistently in Vite and TypeScript.
- Preserve the `Product` distinction between `img` (required display URL) and optional `imageUrl` (admin/upload input). Catalog mutations normalize both so existing presentation components continue to work.
- Use the custom Tailwind palette and fonts in `tailwind.config.js` (`botanical`, `cream`, `ivory`, `petal`, `blush`, `clay`, `gold`) rather than introducing near-duplicate arbitrary colors for brand UI.
- Admin requests pass the stored JWT as `Authorization: Bearer <token>` and must remain under `/api/admin/**`; public storefront calls stay under `/api`.
- The Vercel rewrite sends all paths to `index.html`, which is required for the client-side `/admin` route.
