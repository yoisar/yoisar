# Análisis de yoisar.com para atraer empresas que contratan desarrolladores con IA

**Fecha:** 23/10/2026
**Fuentes:** sitio en producción, `frontend/src`, repos en `~/projects` (todos los proyectos del VPS), informes `docs/` de Patología V2 (RISMI) y CGM, informe SSL del 14/09/2026.
**No se abrieron** archivos de credenciales (`CREDENTIALS_*`, `secrets-vps.md`, claves SSH).

---

## 1. Diagnóstico del sitio (antes de los cambios)

| Hallazgo | Impacto |
|---|---|
| Mensaje orientado a clientes freelance ("tu proyecto corre sobre mi infraestructura", "Cotizá conmigo") | Una empresa que busca contratar no encuentra qué rol ofrecés |
| IA mencionada como frase suelta, sin mostrar el método | No se ve la diferencia de trabajar con agentes |
| Tarjetas sin cifras, arquitectura ni resultados | No hay prueba de criterio técnico |
| Sin GitHub, sin LinkedIn, sin CV | El reclutador no puede validar el perfil |
| SPA con `<div id="root">` vacío, sin Open Graph, `robots.txt` ni `sitemap.xml` | Mala indexación y sin vista previa al compartir el link |
| Patología figura como versión vieja ("App Patología") | El trabajo más fuerte y reciente no se ve |
| Tarjeta "Inversores" con meta de $10.000.000 en la grilla principal | Resta seriedad ante empresas |
| Clerk AI no aparece | Se pierde el proyecto más alineado con IA |

## 2. Proyectos del VPS (repos en `~/projects`) contra el sitio

| Proyecto | Repo | Commits | Archivos de test | Estado online (23/10) | En el sitio |
|---|---|---|---|---|---|
| Patología V2 (RISMI) | `ar/hospital/rismi-laravel` | 1.246 | 152 | Interno (hospital), MR !312 en QA | Versión vieja → **actualizado** |
| CGM | `ar/gobernacion/cgm/sistema-cgm` | 371 | 15 | 200 (cgm.yoisar.com) | Sí → **caso de estudio** |
| Clerk AI | `my-mac-portfolio/clerk-ai` | 786 | 116 | 200 (clerk.yoisar.com) | No → **agregado** |
| Distriboo | `my-mac-portfolio/distriboo` | 1.707 | 111 | 200 | Sí |
| VentaRifas | `my-mac-portfolio/ventarifas` | 371 | 29 | 200 | Sí |
| Planning | `planning` | 21 | 6 | 200 | Sí (en desarrollo) |
| Guajira / Por el Caribe | `ar/guajira.com.ar` | — | — | 200 | Sí |
| Fideliza, YOIS Snacks | — | — | — | 200 | Sí |

Conteos de commits y archivos de test sacados con `git rev-list` y `find` el 23/10/2026; son cantidades de archivos, no de casos de prueba.

## 3. Hechos verificables por proyecto (base para los casos de estudio)

### Patología V2 — RISMI, Hospital Madariaga
- Migración del sistema anterior (PHP 5.6 sin framework, PHPMaker) a un aplicativo dentro de RISMI con Laravel + Vue.js.
- Reglas de la propuesta: autenticación única, roles, auditoría y navegación de RISMI; sin duplicar datos de paciente (`id_paciente_rismi`).
- Alcance comprometido: paridad funcional con el sistema actual; fecha de desarrollo 10/12/2026 (no incluye producción).
- Dominio: unos 357.000 estudios en la base del sistema anterior en 8 tipos (PAP, PAP+HPV, HPV, biopsia de mamas, colon, biopsia general, etc.).
- Calidad: Vitest 94/94 y Cypress 59/59 en el informe de estado del 22/10; ESLint y build; QA de Verónica aplicado por lotes con informe por lote.
- Trabajo ordenado en lotes (L1…L5, QA-1, QA-2), un informe por lote y una tarea Kanboard.

### CGM — Casa de Gobierno de Misiones
- Microservicios Laravel (auth/RBAC con Sanctum y Spatie, mesa de entrada, expedientes) + frontend Next.js 14 + PostgreSQL + MinIO.
- CI/CD: imágenes construidas en GitHub Actions y publicadas en GHCR; el VPS solo hace `pull` y `up` (regla CI-05).
- Versión 0.10.37 al 21/10/2026.
- Hecho recientemente: numeración correlativa con bloqueo (advisory lock), carátula A4 réplica del formulario físico, importación de 427 códigos de organismos con vista previa y auditoría.
- Validación: 14 PASS / 0 FAIL en el test de numeración; type check sin errores.

### Clerk AI
- SaaS multi-tenant de asistente conversacional: landing + API en `clerk.yoisar.com`, panel en `panel.clerk.yoisar.com`.
- Backend Laravel 11, paneles Next.js 16, Postgres 16 con pgvector.
- Pipeline RAG: chunking, embeddings (Ollama `nomic-embed-text`), recuperación de conocimiento y cliente Anthropic.
- Pagos y licencias: pagos offline, acciones manuales de licencia y emails. PayPal **no** está implementado.
- Es el proyecto que mejor demuestra construcción de producto con IA, no solo uso de IA.

## 4. Lo que piden las empresas (evidencia y límites)

Las dos búsquedas web que hice no devolvieron ofertas ni empresas concretas. Solo hay artículos de carrera, algunos sin fuente primaria. Lo que se repite:

- Criterio por encima de volumen de código.
- Proyectos desplegados con historial de commits.
- Decisiones documentadas (ADR, postmortems).
- Decir cómo se usó la IA y qué se verificó.
- Capacidad de defender cada decisión.

Fuentes consultadas:
- <https://simeononsecurity.com/software-development-career-playbook/getting-started-in-software-development/building-a-developer-portfolio/>
- <https://developia.substack.com/p/the-ai-hiring-revolution-why-resumes>
- <https://www.louisbouchard.ai/what-i-look-for-when-hiring-ai-engineers/>
- <https://algeriatech.news/?p=25771>

**Pendiente:** no hay lista de empresas objetivo. Ver §7.

## 5. Cambios implementados en este lote

1. Hero reorientado a empresas que contratan (rol, stack, método) con botones a casos de estudio, GitHub y contacto.
2. Sección **Casos de estudio** (Patología V2, CGM, Clerk AI) con problema, solución, resultados, rol de la IA y stack. Textos en es/en/pt.
3. Sección **Cómo trabajo con IA** (requerimiento → lotes → verificación → informe).
4. Tarjeta de Patología actualizada a V2; tarjeta de Clerk AI agregada; "Inversores" sacada de la grilla principal (queda en el DOM, oculta).
5. Menú lateral con las secciones nuevas y Clerk AI.
6. Contacto orientado a empresas, con enlaces a GitHub y email.
7. SEO: `lang="es"`, título y descripción nuevos, Open Graph, Twitter Card, canonical, JSON-LD `Person`, contenido estático dentro de `#root` y `<noscript>` para buscadores, `robots.txt` y `sitemap.xml`.
8. Tests actualizados a los textos nuevos.

## 6. Decisiones y riesgos

- **Confidencialidad:** los casos de gobierno y salud muestran arquitectura y cifras, sin nombres de personas ni datos internos. Confirmar con el hospital y con la Casa de Gobierno qué se puede nombrar. Patologia V2 aún no está en producción; el sitio dice "en desarrollo".
- **Inversores:** la oferta de inversión con cap 2.5× sale de la grilla principal. Decidir si se mantiene en otra página.
- **Nombre:** se usa el nombre completo Yassel Omar Izquierdo Souchay en el sitio, el CV y los datos estructurados.

## 7. Segunda tanda (23/10/2026): implementado

| Tarea | Resultado |
|---|---|
| CV en español e inglés | Analizados los de abril 2026 y reescritos para que coincidan con el sitio: nombre completo, perfil con IA, CGM y Patología V2, Clerk AI, herramientas de IA y de calidad. Generados con `docs/cv/build-cv.js` en `frontend/public/cv/` (`cv-yassel-izquierdo-es.pdf` y `-en.pdf`) |
| LinkedIn | Enlace a `linkedin.com/in/yoisar` en contacto, CV y datos estructurados |
| Imagen para compartir | `frontend/public/og-image.png` (1200×630), generada con `docs/cv/og-image.html`. No se pudo extraer la foto de LinkedIn: exige sesión y su vista previa pública es una imagen genérica |
| Prerender | `frontend/scripts/prerender.js` corre como `postbuild` y deja el HTML completo en `build/index.html`. Usa esbuild y `react-dom/server`, sin navegador, así que funciona en el Docker de producción y en GitHub Actions |
| Proyectos retirados | Sin menciones en el sitio, el CV ni este documento |
| Nombre | Yassel Omar Izquierdo Souchay |

### Cambios hechos al CV respecto de abril 2026
- Título: de "Emprendedor IT | Sistemas de Salud" a desarrollo con agentes de IA, salud y gobierno.
- Perfil: agrega el método de trabajo con IA y el objetivo de sumarse a un equipo de producto con IA.
- Nuevas entradas: CGM (2026) y Clerk AI.
- Patología V2 como primer punto de la experiencia en RISMI, con cifras.
- Herramientas: agrega Claude Code, agentes de IA, RAG, Vitest, Cypress, Playwright, Docker, GitHub Actions y GHCR.
- Correcciones: el mail del CV en inglés tenía un error de tipeo (`siqy23`); ahora figura `me@yoisar.com` y `sioy23@gmail.com`. Se quitaron los caracteres de ligadura rotos ("Per l", " ntech").
- Se quitaron del CV los proyectos retirados.

## 8. Tercera tanda (23/10/2026)

- **Foto de perfil:** se usa la foto de LinkedIn (`~/Documents/foto-perfil-linkeding-yois.jpeg`, recortada para quitar la etiqueta "AUTOMÁTICA") en el hero, en `yois-perfil.jpg` (datos estructurados) y en la imagen para compartir `og-image.png`.
- **Autorización para nombrar al hospital y a la Casa de Gobierno:** confirmada por el titular el 23/10/2026. Queda anotado; no se obtuvo constancia escrita en esta sesión.
- **Sitio desactualizado tras el deploy (causa):** el vhost de nginx del host sirve `/www/wwwroot/yoisar.com/app/frontend/build` desde disco, pero el deploy solo reconstruía el contenedor del puerto 8090, que ese vhost no usa. El directorio seguía con el build del 21/06/2026. Corrección: `deploy-prod.sh` copia ahora el build del contenedor a ese directorio.
- **Sitemap:** `robots.txt` ya lo declara. El alta en Google Search Console la tiene que hacer el dueño de la cuenta (ver §9).

## 9. Pendientes que necesitan datos tuyos

| Tarea | Qué falta |
|---|---|
| Agendar llamada | Hecho: botón con `https://cal.com/yois-ykrnja/charla-sobre-un-puesto-o-proyecto` |
| Repo público | Un proyecto chico y abierto con README que explique el uso de IA |
| Lista de empresas | Búsqueda manual en LinkedIn, Torre, Remote OK y We Work Remotely con "Claude Code", "agentic", "AI-assisted" |
| Alta en Google Search Console | Agregar la propiedad `https://yoisar.com/`, verificarla (registro DNS TXT) y enviar `https://yoisar.com/sitemap.xml` en Sitemaps |
