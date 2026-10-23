# Informe — 2026-10-23 (ajuste de información)
**Req:** docs/yois/req-ajuste-informacion.md | **Commits:** 3 lotes + informe

## Cambios
- Sitio (`frontend/src/i18n/locales/{es,en,pt}.json`, `App.js`, `public/index.html`): título `Patología (Hospital Madariaga)`; texto de migración y de CGM según tabla del req; Clerk AI en descripción general; se quitan badges de tecnología de todas las tarjetas, el stack de los casos, "PHP 5.6", herramientas de test, "GitHub Actions/GHCR" y versiones; Ventarifas sin "Next.js"; texto de infraestructura sin detalle de microservicios de gobierno.
- CV (`docs/cv/build-cv.js` → `frontend/public/cv/*.pdf`): mismos reemplazos, tabla de proyectos sin columna de tecnologías, rol RISMI sin stack, "CI/CD" en vez de pipeline. PDF regenerados (2 páginas) y copiados a `~/Documents/cv_yois_oct_2026*.pdf`.
- LinkedIn (`docs/linkedin-publicacion-2026-10-23.md`): bloque "¿Dónde aplico este enfoque hoy?" del req; hashtags sin tecnologías; conteo de caracteres actualizado (1328 es / 1299 en).
- Tests: `App.test.js` + `scripts/ego-nav-test.mjs` con checks de regla editorial.

## Validación
Unitarios: 26 PASS / 0 FAIL. Búsqueda de términos prohibidos en `#casos` y `#proyectos` (es/en/pt) y en los PDF: 0 resultados para `Patología V2`, `RISMI (Hospital Madariaga)`, `Vue.js`, `Next.js 14`, `PostgreSQL`, `GitHub Actions`, `con frontend -`, `hacia con`; sin dobles espacios ni puntuación duplicada; métrica "más de 350.000 estudios históricos" y estado "Actualmente en desarrollo" conservados.

## Build
0 errores (prerender OK).

## Navegación (ego lite browser)
Local: 33 PASS / 0 FAIL · Producción (`https://yoisar.com`, run 39934510961): 33 PASS / 0 FAIL. CV publicado idéntico al generado.

## Pendientes
- Decisión aplicada: `Laravel`, `Vue`, `Next.js` y `PostgreSQL` permanecen solo como **habilidades del desarrollador** (subtítulo del hero, metadatos/Open Graph/JSON-LD, imagen para compartir, tabla "Tecnologías y herramientas" del CV, titular propuesto de LinkedIn), no como stack de un proyecto. Si se requiere 0 resultados literal en todo el sitio y CV, quitar esas menciones (1 lote).
- `docs/analisis-empleabilidad-2026-10-23.md` y los informes internos conservan detalle técnico; no son textos públicos objetivo del req.
- Publicar en LinkedIn la versión actualizada (si ya se publicó la anterior, editarla).
