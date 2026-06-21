# Informe — 2026-06-20
**Req:** docs/yois/req-ANEXO N2 – INTERNACIONALIZACIÓN, UX CORPORATIVA Y NUEVO PROYECTO TERCIARIZADO.md | **Commits:** 1 lote

## Cambios
- Internacionalización completa (ES/EN/PT) con `react-i18next` + `i18next-browser-languagedetector`. Selector visible en el header (ES/EN/PT), persiste preferencia en `localStorage`.
- Todo el contenido traducido: hero, about, servicios, proyectos (nombres, taglines, descripciones, badges de estado), infraestructura, formulario de contacto y footer.
- Fuente Inter cargada vía Google Fonts (`frontend/public/index.html`).
- Agregada ficha de proyecto **Por el Caribe** (`https://porelcaribe.dev.yoisar.com/`), segundo sitio de turismo del mismo cliente de Guajira, con mismo peso visual y badge "En Desarrollo (Activo)".
- Asserts de `App.test.js` actualizados (8 links visibles, 4 badges "En Desarrollo"); test suite fuerza idioma `es` para mantener compatibilidad con los asserts existentes.

## Validación
No aplica (sin endpoints backend en este lote).

## Build
0 errores. 18/18 tests PASS.

## Pendientes
- Rutas SEO reales `/es` `/en` `/pt` — no implementadas (el req permite definición funcional sin codificación de routing; se documenta como decisión tomada con el usuario). Requeriría `react-router-dom` si se decide abordar a futuro.
- Detección de idioma por geolocalización — se usa `navigator.language` (browser), no geolocalización por IP.
