# Informe — 2026-06-20
**Req:** docs/yois/req-ANEXO N3 – SISTEMA DE NAVEGACIÓN CON MENÚ HAMBURGUESA LATERAL IZQUIERDA.md | **Commits:** 1 lote

## Cambios
- Ícono hamburguesa sticky en `nav` superior izquierda, navbar con `position: sticky`.
- Drawer off-canvas izquierdo (75% desktop vía `maxWidth: 420px`, 100% móvil), overlay oscuro, cierre con X/click overlay/ESC.
- Bloque A: anclas a Inicio (`#inicio`), Servicios (`#servicios`), Infraestructura (`#infraestructura`), Contacto (`#contacto`) con scroll suave.
- Bloque B: listado completo de proyectos agrupado en Comerciales / Gubernamentales / Terceros, con badge de estado (verde/amarillo/rojo). Proyectos con URL pública abren en nueva pestaña; los que no tienen vista pública (Planning, PortalCheck, Patología) hacen scroll a `#proyectos`.
- Claves i18n `menu.*` agregadas a es/en/pt.json; nombres de proyecto no se traducen (ya usaban claves `projects.<key>.name`).

## Validación
N/A — no aplica backend/endpoints para este requerimiento (cambio puramente frontend).

## Build
0 errores, 0 warnings (`npm run build` con CI=true).

## Pendientes
Ninguno.
