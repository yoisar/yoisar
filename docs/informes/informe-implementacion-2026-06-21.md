# Informe — 2026-06-21
**Req:** docs/yois/req-AJUSTE-GRAMATICAL-SEMÁNTICO–ELIMINACIÓN-POSESIVO-MI-MÍO-EN PROYECTOS.md | **Commits:** 1 lote

## Cambios
- es.json, en.json, pt.json: eliminado "Mi/Mis/My/Meu/Minha" en títulos de menú, sección Proyectos y descripciones de cada ficha (Fideliza, VentaRifas, Distriboo, CGM, YOIS Snacks, Guajira, Por el Caribe, Planning, PortalCheck, Patología).
- Reemplazo por verbos de autoría: "que desarrollo", "construido por mí", "I develop", "I'm developing", "que desenvolvo".
- Conservadas las excepciones permitidas: "mi infraestructura", "mis servicios", "mi enfoque/metodología" (sección about, hero, services e infrastructure).
- CGM (en/pt) corregido además un error de traducción previo ("my document management system" / "meu sistema") que duplicaba el posesivo respecto a la versión es ya corregida.

## Validación
No aplica (cambio de copy i18n, sin endpoints afectados).

## Build
0 errores — `npm run build` compiló correctamente.

## Pendientes
Ninguno.
