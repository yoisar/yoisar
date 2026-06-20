# Informe — 2026-06-20
**Req:** ajuste solicitado en conversación (no usar emojis, usar iconos de la plantilla; validar varias pantallas) | **Commits:** 1 lote

## Cambios
- Instalada `bootstrap-icons` (oficial de Bootstrap 5, ya en uso en el proyecto) y reemplazados todos los emojis del landing por iconos `<i className="bi bi-...">`: navbar, hero, secciones, cards de servicios/proyectos, badges "En Desarrollo", contacto y footer.
- Corregido bug de overflow horizontal en mobile/tablet: los contenedores de badges de tecnología (`d-flex gap-2 mb-3`) no envolvían (`flex-wrap`), causando que el contenido se saliera del viewport en pantallas angostas.

## Validación
Visual con Playwright (chromium) en 3 viewports:
- Mobile (375x812): sin overflow horizontal, badges envuelven correctamente.
- Tablet (768x1024): sin overflow horizontal.
- Desktop (1440x900): sin overflow horizontal (ya no tenía el bug).

## Build
0 errores, 0 warnings. Tests: 18 PASS / 0 FAIL (incluye nuevo test que verifica ausencia de emojis y presencia de iconos `bi`).

## Pendientes
Ninguno.
