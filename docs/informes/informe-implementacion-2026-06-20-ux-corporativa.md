# Informe — 2026-06-20
**Req:** docs/yois/req-ANEXO N2 – INTERNACIONALIZACIÓN, UX CORPORATIVA Y NUEVO PROYECTO TERCIARIZADO.md | **Commits:** 1 lote

## Cambios
- Fondo principal cambiado a paleta slate/navy (`#0f172a → #1e293b → #334155`), sobria y corporativa, reemplazando el degradado índigo/violeta anterior.
- Tipografía Inter cargada vía Google Fonts en `frontend/public/index.html` y aplicada en `body` y contenedor raíz.
- Acento de marca cambiado a azul cobalto (`#1d4ed8`) vía override de `--bs-primary`, `.btn-primary`, `.btn-outline-primary` y `.text-primary` en `frontend/src/index.css`.
- CTA principal del hero ("Hablemos de tu idea") ahora usa `btn-primary` (cobalto) en vez de `btn-light`.

## Validación
No aplica (sin endpoints backend en este lote).

## Build
0 errores. 18/18 tests PASS.

## Pendientes
- i18n (ES/EN/PT) — pendiente.
- Badges de estado semánticos (verde/ámbar/azul) y grids de proyectos ya cumplían parcialmente el criterio; no se tocaron en este lote.
