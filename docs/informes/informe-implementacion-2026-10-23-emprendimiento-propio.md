# Informe — 2026-10-23 (emprendimiento propio: YOIS Snacks y YOIS Helados)
**Req:** pedido directo (yoissnacks.com y helados.yoissnacks.com como casos reales de emprendimiento propio) | **Commits:** 3 lotes + informe

## Cambios
- Sitio (`App.js`, `i18n/locales/{es,en,pt}.json`, `public/index.html`): dos casos de estudio nuevos (YOIS Snacks, YOIS Helados) con enlace "Ver sitio"; tarjeta y entrada de menú de YOIS Helados; descripción de YOIS Snacks ampliada; subtítulo del hero y "sobre mí" mencionan negocios propios; sección de casos pasa a 5; metadatos y resumen estático actualizados.
- CV (`docs/cv/build-cv.js` → PDF es/en): perfil con "tiendas online propias", bullets y filas de proyecto de Snacks y Helados; PDF regenerados y copiados a `~/Documents/cv_yois_oct_2026*.pdf`.
- LinkedIn (`docs/linkedin-publicacion-2026-10-23.md`): bullet de negocios propios y enlaces a las tiendas en el primer comentario (1480 es / 1453 en caracteres).
- Tests: `App.test.js` y `scripts/ego-nav-test.mjs` (9 enlaces de proyecto, 5 casos, enlaces de tiendas).

## Validación
Unitarios: 26 PASS / 0 FAIL. Regla editorial (sin tecnologías en proyectos) se mantiene: sin nombres de stack en los textos nuevos.

## Build
0 errores (prerender OK).

## Navegación (ego lite browser)
Local: 35 PASS / 0 FAIL · Producción (run 39935899197): 35 PASS / 0 FAIL. CV publicado idéntico al generado.

## Pendientes
- Los textos de resultados salen de lo visible en ambos sitios y de datos ya publicados en el CV; no se agregaron cifras de ventas. Si hay métricas aprobadas (pedidos, clientes, revendedores), sumarlas a los casos.
- El rol de la IA en ambos casos es genérico; ajustar si querés un detalle concreto.
- La publicación de LinkedIn ya superó los 1.300 caracteres recomendados (1480); recortar si se prefiere.
