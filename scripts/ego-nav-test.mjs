// Test de navegación con ego lite browser.
// Uso: ego-browser nodejs < scripts/ego-nav-test.mjs
// Cambiar BASE para probar local (http://localhost:4173 con `npx serve -s frontend/build -l 4173`) o producción.
const BASE = "https://yoisar.com";
const CAL = "https://cal.com/yois-ykrnja/charla-sobre-un-puesto-o-proyecto";

const task = await taskSpace("nav-test yoisar");
const page = task.page("p1");
const results = [];
const check = (name, ok, detail = "") => {
  results.push(ok);
  console.log(`[${ok ? "PASS" : "FAIL"}] ${name}${ok ? "" : " -> " + detail}`);
};
const text = (sel) => page.evaluate((s) => document.querySelector(s)?.textContent ?? null, sel);

await page.goto(BASE + "/");
await page.waitForSelector("css:h1", { state: "visible" });

// 1. Carga y SEO
const head = await page.evaluate(() => ({
  title: document.title,
  lang: document.documentElement.lang,
  og: document.querySelector('meta[property="og:image"]')?.content,
  ld: !!document.querySelector('script[type="application/ld+json"]')
}));
check("título con nombre completo", head.title.includes("Yassel Omar Izquierdo Souchay"), head.title);
check("lang=es", head.lang === "es", head.lang);
check("og:image y JSON-LD", !!head.og && head.ld);

// 2. Secciones
for (const id of ["inicio", "casos", "metodo", "servicios", "proyectos", "infraestructura", "contacto"]) {
  check(`sección #${id}`, await page.evaluate((i) => !!document.getElementById(i), id));
}

// 3. Menú lateral
await page.click("loc=role:button[name='Abrir menú']");
await page.waitForFunction(() => document.querySelector("aside")?.getAttribute("aria-hidden") === "false");
check("menú abre", true);
await page.click("loc=role:button[name='Casos de estudio']");
await page.waitForFunction(() => document.getElementById("casos").getBoundingClientRect().top < 200);
check("menú → #casos", true);
check("menú cierra al navegar", await page.evaluate(() => document.querySelector("aside").getAttribute("aria-hidden") === "true"));

// 4. CTAs del hero
await page.click("text=Hablemos de tu equipo");
await page.waitForFunction(() => document.getElementById("contacto").getBoundingClientRect().top < 300);
check("hero → #contacto", true);

// 5. Enlaces de contacto
const links = await page.evaluate(() => Object.fromEntries(
  [...document.querySelectorAll("#contacto a")].map((a) => [a.textContent.trim(), a.href])
));
check("agendar → Cal.com", links["Agendar una llamada"] === CAL, links["Agendar una llamada"]);
check("LinkedIn", links["LinkedIn"] === "https://www.linkedin.com/in/yoisar/", links["LinkedIn"]);
check("GitHub", links["GitHub"] === "https://github.com/yoisar", links["GitHub"]);
check("email", (links["Escribime por email"] || "").startsWith("mailto:me@yoisar.com"), links["Escribime por email"]);

// 6. Archivos servidos
const files = ["/sitemap.xml", "/robots.txt", "/og-image.png", "/yois-perfil.jpg", "/cv/cv-yassel-izquierdo-es.pdf", "/cv/cv-yassel-izquierdo-en.pdf"];
const statuses = await page.evaluate(async (f) => Promise.all(f.map(async (p) => [p, (await fetch(p)).status])), files);
for (const [p, s] of statuses) check(`GET ${p}`, s === 200, String(s));

// 7. Idiomas y CV por idioma
for (const [btn, h1, cv] of [["EN", "Full-stack developer", "-en.pdf"], ["PT", "Desenvolvedor full-stack", "-es.pdf"], ["ES", "Desarrollador full-stack", "-es.pdf"]]) {
  await page.click(`loc=role:button[name='${btn}']`);
  await page.waitForFunction((t) => document.querySelector("h1")?.textContent.includes(t), h1);
  const href = await page.evaluate(() => document.querySelector('a[href*="/cv/"]').getAttribute("href"));
  check(`idioma ${btn}`, href.endsWith(cv), href);
}

// 8. Tarjetas de proyecto visibles y sin proyectos retirados
const body = await page.evaluate(() => document.body.innerText);
// Regla editorial: sin tecnologías, versiones ni pipelines en textos de proyectos (#casos, #proyectos)
const projectText = await page.evaluate(() => ["casos", "proyectos"].map((i) => document.getElementById(i).innerText).join(" "));
check("regla editorial: sin tecnologías en proyectos", !/Patología V2|RISMI \(Hospital Madariaga\)|Laravel|Vue|Next\.js|PostgreSQL|GitHub Actions|GHCR|pgvector|PHP|React|Vitest|Cypress|Playwright|v0\.10|con frontend -|hacia con/i.test(projectText));
check("título caso Patología (Hospital Madariaga)", projectText.includes("Patología (Hospital Madariaga)"));
check("estado y métrica conservados", /Actualmente en desarrollo/.test(projectText) && /más de 350\.000 estudios históricos/i.test(projectText));
check("sin dobles espacios ni puntuación duplicada", !/ {2,}|\.\.|,,/.test(projectText.replace(/\s+/g, " ").replace(/\.\.\./g, "")));
check("sin proyectos retirados", !/AdVantage|Cuotaplan|AdminBarrio|BuildShare/i.test(body));
const projectLinks = await page.evaluate(() => [...document.querySelectorAll("#proyectos a")].filter((a) => a.offsetParent).map((a) => a.href));
check("8 enlaces 'Ver Proyecto' visibles", projectLinks.length === 8, String(projectLinks.length));

console.log(`${results.filter(Boolean).length} PASS / ${results.filter((r) => !r).length} FAIL`);
console.log(await page.screenshot({ path: "/tmp/ego-nav-test.png" }));
