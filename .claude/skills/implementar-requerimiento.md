# Skill: Implementar Requerimiento Yoisar — Modo Ultra-Light

**Sin explicaciones. Sin cortesías. Solo el resultado.**

---

## Reglas de ejecución (para la IA)

1. **Corrección quirúrgica** — Si el usuario detecta un error, **no reescribas todo**. Edita solo el fragmento afectado que se te indique.

2. **Hiper-especificidad** — El usuario debe proporcionar **rutas exactas y nombres de archivo**. Si no las da, **pregunta** antes de actuar. No escanees carpetas enteras.

3. **Prohibido grepear** — No busques patrones en toda la codebase. Usa solo los archivos que el usuario menciona explícitamente o los que se infieran directamente de esos archivos (dependencias inmediatas).

4. **Zero cortesía** — Nada de "Claro", "Aquí tienes", "He implementado". Ve directo al código, commits o informe.

---

## Activación
*"proceder con [archivo-req]"* | *"aplicar plantilla-prompt-req"* | *"implementar requerimiento"*

---

## Variables
- `REQS_FILE` = ruta al archivo de requerimientos
- `PROJECT_PATH` = `/Users/yois/projects/my-mac-portfolio/yoisar/app`

---

## Fase 1 — Implementación por lotes
1. Leer `REQS_FILE`. Extraer IDs y **archivos afectados** (deben estar listados en el req).
2. **No explores** más allá de esos archivos + sus imports directos (máx 2 niveles).
3. Agrupar en lotes de ≤5 archivos. Orden: componentes → páginas → rutas backend.
4. Por lote: implementar → commit `feat/fix(scope): descripción · lote N`.
5. Si falta información → preguntar **una línea** y esperar.

---

## Fase 2 — Validación de endpoints
- Script en `no_subir/test_*.py` con salida `[PASS]`/`[FAIL]`.
- Cubrir: nominal, bordes, 4xx/5xx.
- Levantar si aplica: `cd $PROJECT_PATH && docker compose up -d`
- Reportar: `N PASS / M FAIL`

---

## Fase 3 — Revisión frontend (obligatoria)
- **Build:** `cd frontend && npm run build` → resolver **todos** los errores/warnings de compilación.
- **Tests unitarios:** `cd frontend && CI=true npm test -- --watchAll=false` → 0 fallos. Si cambia contenido visible, actualizar aserciones en `src/App.test.js`.
- **Validación visual:** opcional. Si se hace, reportar solo issues críticos o correcciones aplicadas.

## Fase 3b — Test de navegación con ego lite browser (obligatoria si cambia UI, rutas, enlaces o contenido)
Script: `scripts/ego-nav-test.mjs` (salida `[PASS]`/`[FAIL]` y resumen `N PASS / M FAIL`). Cubre: título/SEO, secciones, menú lateral, CTAs, enlaces de contacto (Cal.com, LinkedIn, GitHub, email), archivos estáticos (sitemap, robots, imágenes, CV), idiomas ES/EN/PT, proyectos visibles y ausencia de proyectos retirados.

1. **Antes del push (local):**
   ```bash
   cd $PROJECT_PATH/frontend && npm run build
   (cd build && python3 -m http.server 4173 &)
   sed 's|const BASE = "https://yoisar.com";|const BASE = "http://localhost:4173";|' ../scripts/ego-nav-test.mjs > /tmp/ego-nav-local.mjs
   ego-browser nodejs < /tmp/ego-nav-local.mjs
   ```
2. **Después del push:** esperar GitHub Actions (`gh run watch <id> --exit-status`) y correr el script sin cambios contra producción: `ego-browser nodejs < scripts/ego-nav-test.mjs`.
3. Si se agrega una sección, enlace o idioma, **agregar su check al script** en el mismo lote.
4. Reglas ego-browser: un solo task space (`nav-test yoisar`); preferir `text=` o `loc=role:` por selectores; si un `click` no resuelve, inspeccionar con `page.snapshot()` antes de reintentar; no usar APIs de Playwright.
5. Reportar el resultado en el informe, sección Navegación. 0 FAIL para cerrar.

---

## Fase 4 — Informe (OBLIGATORIO)
Crear `docs/informes/informe-implementacion-YYYY-MM-DD.md`.

```markdown
# Informe — YYYY-MM-DD
**Req:** <ruta> | **Commits:** N lotes

## Cambios
<frontend/backend — máx 5 bullets>

## Validación
<N PASS / M FAIL>

## Build
<0 errores>

## Navegación (ego lite browser)
<local: N PASS / M FAIL · producción: N PASS / M FAIL>

## Pendientes
<si hay>
```

---

## Ciclo de release
- Commits por lote: `feat|fix|docs(scope): descripción`
- Push a `main`
- Esperar GitHub Actions y validar en producción (Fase 3b) antes de dar por cerrado
- El deploy copia el build a `frontend/build` del servidor (`deploy-prod.sh`); si producción no refleja el cambio, revisar ese paso

---

## Checklist
- [ ] Requerimientos implementados (solo lo pedido)
- [ ] Endpoints: 0 FAIL
- [ ] Build frontend: 0 errores
- [ ] Tests unitarios: 0 fallos
- [ ] Navegación ego-browser local: 0 FAIL (antes del push)
- [ ] Navegación ego-browser producción: 0 FAIL (después de GitHub Actions)
- [ ] Informe generado
- [ ] Push

---

## Datos útiles
| Ítem | Valor |
|------|-------|
| Proyecto | `/Users/yois/projects/my-mac-portfolio/yoisar/app` |
| Backend | Laravel 9 (`backend/`) — `http://localhost:6001` |
| Frontend | React CRA (`frontend/`) — `http://localhost:8080` (docker) / `3000` (local) |
| MySQL | `localhost:6006` (db: `yois_db`) |
| Rama | `main` |
| Producción | `https://yoisar.com` (nginx del host sirve `/www/wwwroot/yoisar.com/app/frontend/build`) |
| Prerender | `frontend/scripts/prerender.js` (postbuild) |
| Agenda | `https://cal.com/yois-ykrnja/charla-sobre-un-puesto-o-proyecto` (`CALENDAR_URL` en `frontend/src/App.js`) |
