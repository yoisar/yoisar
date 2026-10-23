// Genera los CV (es/en) en PDF a partir de los datos de este archivo, con Chrome headless.
// Uso: node docs/cv/build-cv.js   (desde la raíz del repo)
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const CHROME = process.env.CHROME_BIN || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT_DIR = path.join(__dirname, '..', '..', 'frontend', 'public', 'cv');

const NAME = 'Yassel Omar Izquierdo Souchay';
const CONTACT = {
  email: 'me@yoisar.com',
  email2: 'sioy23@gmail.com',
  phone: '+54 9 3764 62-4361',
  linkedin: 'linkedin.com/in/yoisar',
  github: 'github.com/yoisar',
  web: 'yoisar.com'
};

const DATA = {
  es: {
    file: 'cv-yassel-izquierdo-es.pdf',
    lang: 'es',
    title: 'Desarrollador Fullstack | Desarrollo con agentes de IA | Sistemas de Salud y Gobierno',
    location: 'Posadas, Misiones, Argentina',
    h: { profile: 'Perfil profesional', exp: 'Experiencia profesional', skills: 'Tecnologías y herramientas', projects: 'Proyectos destacados' },
    profile: 'Más de 25 años de experiencia en sistemas, combinando desarrollo fullstack, arquitectura de software y emprendimiento tecnológico. Desarrollador que trabaja con agentes de IA: requerimiento escrito, implementación por lotes, verificación con pruebas automatizadas e informe por lote. Llevo a producción sistemas de salud y gobierno (RISMI, Casa de Gobierno de Misiones) y productos SaaS propios (Clerk AI, Distriboo, Ventarifas). Busco sumarme a un equipo que construya producto con IA.',
    jobs: [
      {
        role: 'Desarrollador Fullstack – Gestión Documental (CGM)',
        org: 'Casa de Gobierno de Misiones | Misiones, Argentina',
        period: '2026 – Actualidad',
        bullets: [
          'Sistema de mesa de entrada y expedientes con **microservicios** (autenticación y permisos, mesa de entrada, expedientes) con frontend.',
          'Las imágenes se construyen de forma automatizada y el servidor solo las descarga.',
          'Numeración correlativa de expedientes por organismo y año con bloqueo, sin duplicados; carátula A4 réplica del formulario físico.',
          'Importación de 427 códigos de organismos con vista previa y auditoría; evolución continua por versiones.',
          'Cada requerimiento se documenta por escrito; verificación con pruebas automáticas, chequeo de tipos y navegador automatizado, con un informe por entrega.'
        ]
      },
      {
        role: 'Desarrollador de Software – Sistemas de Salud (RISMI)',
        org: 'Hospital Dr. Ramón Madariaga | Posadas, Misiones, Argentina',
        period: '2022 – Actualidad',
        bullets: [
          '**Patología (2026)**: migración del sistema de anatomía patológica (más de 350.000 estudios históricos en 8 tipos) a un aplicativo dentro de RISMI, con autenticación única, roles, auditoría y navegación de la plataforma, y paridad funcional con el sistema anterior, informes incluidos.',
          'Patología se entrega por lotes, con informe técnico por lote y QA con el área usuaria; más de 150 pruebas automatizadas. Actualmente, en desarrollo.',
          'Módulo de Hoja de Anestesistas (RISMI v2), para la gestión digital de procedimientos anestésicos.',
          'Mantenimiento del módulo de Vacunación (RISMI v2) y del sistema de stock (RISMI v1).',
          'Módulo de notificaciones (RISMI v1) con envíos personalizados, alertas automatizadas y seguimiento de eventos.',
          'Refactorización de código en RISMI v1: legibilidad, mantenibilidad y rendimiento.'
        ]
      },
      {
        role: 'Desarrollador Fullstack – Proyectos de Turismo',
        org: 'Guajira Viajes & PorElCaribe | Argentina',
        period: '2026 – Actualidad',
        bullets: [
          'Modernización y mantenimiento de las plataformas de turismo Guajira Viajes y PorElCaribe: frontend, lógica de negocio y panel de administración para contenido, paquetes y consultas.',
          'Módulo de cruceros con landing específica; financiación en cuotas fijas en pesos con convenios bancarios.',
          'Entornos de staging para desarrollo y pruebas: front.guajira.dev.yoisar.com y porelcaribe.dev.yoisar.com.'
        ]
      },
      {
        role: 'Desarrollador Fullstack Independiente y Emprendedor',
        org: 'Productos propios | Argentina',
        period: '2025 – Actualidad',
        bullets: [
          '**Clerk AI** – SaaS propio de asistente conversacional que responde con la información de cada negocio, con panel de administración, planes, pagos y licencias. Pruebas de extremo a extremo automatizadas.',
          '**Distriboo** – SaaS B2B para distribución mayorista: motor de precios de 4 niveles, pedidos online 24/7, logística por zonas, importación desde CSV/Excel, roles y planes por suscripción.',
          '**Ventarifas** – Marketplace de rifas online: números automáticos, pagos seguros y panel en tiempo real.',
          '**Yois Snacks** – E-commerce con red de revendedores, comisiones escalonadas, dashboard con KPIs y panel self-service.',
          '**Fideliza** – Plataforma para comercios: catálogo, puntos, referidos y rifas.'
        ]
      }
    ],
    skills: [
      ['Lenguajes', 'PHP (5.2 a versiones modernas), JavaScript, TypeScript'],
      ['Frameworks', 'Laravel, Symfony, Vue.js, Next.js, React, React Native'],
      ['Bases de datos', 'MySQL, PostgreSQL (pgvector)'],
      ['IA', 'Claude Code y agentes de IA, GitHub Copilot, RAG (embeddings, pgvector), reglas de repositorio en AGENTS.md'],
      ['Calidad', 'Vitest, Cypress, Playwright, PHPUnit, ESLint'],
      ['Infraestructura', 'Docker, CI/CD, nginx, Let\'s Encrypt, VPS Linux'],
      ['Control de versiones', 'Git, GitFlow, GitLab'],
      ['Gestión', 'Kanboard']
    ],
    projectsHead: ['Proyecto', 'Descripción'],
    projects: [
      ['Clerk AI', 'SaaS propio de asistente conversacional para negocios, con panel, planes y licencias. clerk.yoisar.com'],
      ['CGM', 'Gestión documental de la Casa de Gobierno de Misiones: mesa de entrada y expedientes.'],
      ['Patología (Hospital Madariaga)', 'Aplicativo del área de patología del Hospital Madariaga, dentro de RISMI. Actualmente, en desarrollo.'],
      ['Guajira Viajes', 'Agencia de viajes con paquetes, cruceros y financiación en cuotas.'],
      ['PorElCaribe', 'Turismo en destinos del Caribe.'],
      ['Distriboo', 'SaaS B2B de distribución mayorista. distriboo.yoisar.com'],
      ['Ventarifas', 'Marketplace de rifas online. ventarifas.com'],
      ['Yois Snacks', 'E-commerce con red de revendedores. yoissnacks.com'],
      ['Fideliza', 'Fidelización: puntos, referidos y rifas. fideliza.yoisar.com']
    ]
  },
  en: {
    file: 'cv-yassel-izquierdo-en.pdf',
    lang: 'en',
    title: 'Fullstack Developer | AI-Agent Assisted Development | Healthcare & Government Systems',
    location: 'Posadas, Misiones, Argentina',
    h: { profile: 'Professional Profile', exp: 'Professional Experience', skills: 'Technologies & Tools', projects: 'Featured Projects' },
    profile: 'Over 25 years of experience in IT systems, combining fullstack development, software architecture and tech entrepreneurship. I work with AI agents: written requirement, batch implementation, verification with automated tests, and a report per batch. I take healthcare and government systems (RISMI, Misiones Government House) and my own SaaS products (Clerk AI, Distriboo, Ventarifas) to production. I want to join a team that builds products with AI.',
    jobs: [
      {
        role: 'Fullstack Developer – Document Management (CGM)',
        org: 'Misiones Government House | Misiones, Argentina',
        period: '2026 – Present',
        bullets: [
          'Intake and case-file system built with **microservices** (authentication and permissions, intake, case files) with a frontend.',
          'Images are built automatically and the server only pulls them.',
          'Sequential case-file numbering per agency and year with locking, no duplicates; A4 cover sheet that replicates the physical form.',
          'Import of 427 agency codes with preview and audit trail; continuous evolution by versions.',
          'Every requirement is documented in writing; verification with automated tests, type checking and an automated browser, with a report per delivery.'
        ]
      },
      {
        role: 'Software Developer – Healthcare Systems (RISMI)',
        org: 'Hospital Dr. Ramón Madariaga | Posadas, Misiones, Argentina',
        period: '2022 – Present',
        bullets: [
          '**Pathology (2026)**: migration of the pathology system (more than 350,000 historical studies across 8 types) to an application inside RISMI, with single sign-on, roles, auditing and navigation from the platform, and functional parity with the old system, reports included.',
          'Pathology is delivered in batches, with a technical report per batch and QA with the user area; more than 150 automated tests. Currently in development.',
          'Anesthesiologist Module (RISMI v2), digitizing anesthetic procedure management.',
          'Maintenance of the Vaccination Module (RISMI v2) and the Inventory System (RISMI v1).',
          'Notifications module (RISMI v1) with personalized delivery, automated alerts and event tracking.',
          'Refactoring of legacy code in RISMI v1: readability, maintainability and performance.'
        ]
      },
      {
        role: 'Fullstack Developer – Tourism Projects',
        org: 'Guajira Viajes & PorElCaribe | Argentina',
        period: '2026 – Present',
        bullets: [
          'Modernization and maintenance of the Guajira Viajes and PorElCaribe tourism platforms: frontend, business logic and an admin panel for content, packages and inquiries.',
          'Cruise module with a dedicated landing page; fixed-rate installment financing in ARS with bank agreements.',
          'Staging environments for development and testing: front.guajira.dev.yoisar.com and porelcaribe.dev.yoisar.com.'
        ]
      },
      {
        role: 'Independent Fullstack Developer & Entrepreneur',
        org: 'Own products | Argentina',
        period: '2025 – Present',
        bullets: [
          '**Clerk AI** – Own conversational assistant SaaS that answers with each business\'s information, with an admin panel, plans, payments and licensing. Automated end-to-end tests.',
          '**Distriboo** – B2B SaaS for wholesale distribution: 4-level pricing engine, 24/7 online ordering, zone-based logistics, CSV/Excel import, roles and subscription plans.',
          '**Ventarifas** – Online raffles marketplace: automatic numbers, secure payments and a real-time panel.',
          '**Yois Snacks** – E-commerce with a reseller network, tiered commissions, KPI dashboard and self-service panel.',
          '**Fideliza** – Platform for merchants: catalog, points, referrals and raffles.'
        ]
      }
    ],
    skills: [
      ['Languages', 'PHP (5.2 to modern), JavaScript, TypeScript'],
      ['Frameworks', 'Laravel, Symfony, Vue.js, Next.js, React, React Native'],
      ['Databases', 'MySQL, PostgreSQL (pgvector)'],
      ['AI', 'Claude Code and AI agents, GitHub Copilot, RAG (embeddings, pgvector), repository rules in AGENTS.md'],
      ['Quality', 'Vitest, Cypress, Playwright, PHPUnit, ESLint'],
      ['Infrastructure', 'Docker, CI/CD, nginx, Let\'s Encrypt, Linux VPS'],
      ['Version control', 'Git, GitFlow, GitLab'],
      ['Management', 'Kanboard']
    ],
    projectsHead: ['Project', 'Description'],
    projects: [
      ['Clerk AI', 'Own conversational assistant SaaS for businesses, with panel, plans and licensing. clerk.yoisar.com'],
      ['CGM', 'Document management for the Misiones Government House: intake and case files.'],
      ['Pathology (Madariaga Hospital)', 'Madariaga Hospital pathology application, inside RISMI. Currently in development.'],
      ['Guajira Viajes', 'Travel agency with packages, cruises and installment financing.'],
      ['PorElCaribe', 'Tourism in Caribbean destinations.'],
      ['Distriboo', 'B2B SaaS for wholesale distribution. distriboo.yoisar.com'],
      ['Ventarifas', 'Online raffles marketplace. ventarifas.com'],
      ['Yois Snacks', 'E-commerce with a reseller network. yoissnacks.com'],
      ['Fideliza', 'Loyalty: points, referrals and raffles. fideliza.yoisar.com']
    ]
  }
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const md = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

function render(d) {
  const jobs = d.jobs.map((j) => `
    <h3>${esc(j.role)}</h3>
    <p class="meta">${esc(j.org)}<br>${esc(j.period)}</p>
    <ul>${j.bullets.map((b) => `<li>${md(b)}</li>`).join('')}</ul>`).join('');
  const skills = d.skills.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join('');
  const projects = d.projects.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th>${esc(c)}</th>` : `<td>${esc(c)}</td>`)).join('')}</tr>`).join('');
  return `<!doctype html><html lang="${d.lang}"><head><meta charset="utf-8"><title>${NAME} - CV</title>
<style>
@page { size: A4; margin: 14mm 15mm; }
body { font-family: -apple-system, "Helvetica Neue", Arial, sans-serif; font-size: 10pt; line-height: 1.4; color: #1e293b; }
h1 { font-size: 22pt; margin: 0 0 2pt; color: #1e293b; }
h2 { font-size: 13pt; margin: 14pt 0 5pt; padding-bottom: 2pt; border-bottom: 1px solid #cbd5e1; color: #1e3a5f; }
h3 { font-size: 11pt; margin: 9pt 0 0; color: #1e3a5f; }
.title { font-weight: 700; margin: 0 0 5pt; }
.contact { margin: 0; font-size: 9.5pt; }
.meta { margin: 1pt 0 3pt; font-style: italic; color: #475569; font-size: 9.5pt; }
ul { margin: 2pt 0 0; padding-left: 15pt; }
li { margin-bottom: 2pt; }
table { width: 100%; border-collapse: collapse; font-size: 9.5pt; }
th, td { text-align: left; vertical-align: top; padding: 3pt 6pt 3pt 0; border-bottom: 1px solid #e2e8f0; }
th { width: 24%; color: #1e3a5f; }
tr, li { break-inside: avoid; }
h2, h3 { break-after: avoid; }
</style></head><body>
<h1>${NAME}</h1>
<p class="title">${esc(d.title)}</p>
<p class="contact">${esc(d.location)} | ${CONTACT.email} | ${CONTACT.email2} | ${CONTACT.phone}<br>
${CONTACT.linkedin} | ${CONTACT.github} | ${CONTACT.web}</p>
<h2>${d.h.profile}</h2><p>${esc(d.profile)}</p>
<h2>${d.h.exp}</h2>${jobs}
<h2>${d.h.skills}</h2><table>${skills}</table>
<h2>${d.h.projects}</h2><table><tr>${d.projectsHead.map((c) => `<th>${c}</th>`).join('')}</tr>${projects}</table>
</body></html>`;
}

fs.mkdirSync(OUT_DIR, { recursive: true });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'cv-'));
for (const d of Object.values(DATA)) {
  const html = path.join(tmp, `${d.lang}.html`);
  fs.writeFileSync(html, render(d));
  fs.writeFileSync(path.join(__dirname, `cv-${d.lang}.html`), render(d));
  execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--no-pdf-header-footer', `--print-to-pdf=${path.join(OUT_DIR, d.file)}`, `file://${html}`], { stdio: 'ignore' });
  console.log('OK', d.file);
}
