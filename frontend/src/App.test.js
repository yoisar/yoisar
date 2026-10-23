import { render, screen } from '@testing-library/react';
import i18n from './i18n';
import App from './App';

beforeAll(() => {
  i18n.changeLanguage('es');
});

test('renders hero title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Desarrollador full-stack que trabaja con agentes de IA\./i);
  expect(titleElement).toBeInTheDocument();
});

test('renders about section', () => {
  render(<App />);
  const aboutSection = screen.getByText(/Así trabajo: mi enfoque de ingeniería de software/i);
  expect(aboutSection).toBeInTheDocument();
});

test('renders contact section', () => {
  render(<App />);
  const contactSection = screen.getByText(/¿Hablamos\?/i);
  expect(contactSection).toBeInTheDocument();
});

test('renders projects section', () => {
  render(<App />);
  const projectsSection = screen.getByRole('heading', { name: /Proyectos Desarrollados/i });
  expect(projectsSection).toBeInTheDocument();
});

test('renders fideliza project heading', () => {
  render(<App />);
  const fidelizaHeading = screen.getByRole('heading', { name: /Fideliza/i });
  expect(fidelizaHeading).toBeInTheDocument();
});

test('renders contact form submit button', () => {
  render(<App />);
  const submitButton = screen.getByRole('button', { name: /Enviar Consulta/i });
  expect(submitButton).toBeInTheDocument();
});

test('renders website link', () => {
  render(<App />);
  const websiteLink = screen.getByRole('link', { name: /yoisar.com/i });
  expect(websiteLink).toBeInTheDocument();
  expect(websiteLink).toHaveAttribute('href', 'https://www.yoisar.com');
});

test('renders infraestructura description', () => {
  render(<App />);
  const description = screen.getByText(/Mi infraestructura, tu tranquilidad\./i);
  expect(description).toBeInTheDocument();
});

test('renders hero cta buttons', () => {
  render(<App />);
  const cotizarButton = screen.getByRole('link', { name: /Hablemos de tu equipo/i });
  const iaButton = screen.getByRole('link', { name: /Ver casos de estudio/i });
  expect(cotizarButton).toBeInTheDocument();
  expect(iaButton).toBeInTheDocument();
});

test('renders visible project links', () => {
  render(<App />);

  // Test that visible project links exist (Fideliza, Ventarifas, Distriboo, CGM, YOIS Snacks, YOIS Helados, Clerk AI, Guajira, Por el Caribe)
  const visibleProjectLinks = screen.getAllByRole('link', { name: /Ver Proyecto/i });
  expect(visibleProjectLinks).toHaveLength(9);

  // Test specific URLs for visible projects
  const hrefs = visibleProjectLinks.map(link => link.getAttribute('href'));
  expect(hrefs).toContain('https://fideliza.yoisar.com/fideliza');
  expect(hrefs).toContain('https://ventarifas.com');
  expect(hrefs).toContain('https://front.guajira.dev.yoisar.com/');
  expect(hrefs).toContain('https://porelcaribe.dev.yoisar.com/');
  expect(hrefs).toContain('https://clerk.yoisar.com/');
  expect(hrefs).toContain('https://yoissnacks.com/');
  expect(hrefs).toContain('https://helados.yoissnacks.com/');
  expect(hrefs).not.toContain('https://fideliza.yoisar.com/crowdfunding/registro-inversor-dinamico');
});

test('displays dynamic years of experience', () => {
  render(<App />);
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2001;
  const experienceText = screen.getByText(new RegExp(`${yearsOfExperience} años de experiencia`, 'i'));
  expect(experienceText).toBeInTheDocument();
});

test('renders project domain badges without technology names', () => {
  render(<App />);

  expect(screen.getAllByText(/CRM/i).length).toBe(1); // Fideliza
  expect(screen.getAllByText(/Marketplace/i).length).toBeGreaterThanOrEqual(1); // Ventarifas
  expect(screen.getAllByText(/Investment/i).length).toBeGreaterThanOrEqual(1); // tarjeta Inversores (oculta)

  const projects = document.getElementById('proyectos').textContent;
  expect(projects).not.toMatch(/Laravel|React|Next\.js|PostgreSQL|Vue/i);
});

test('renders project status badges from anexo', () => {
  render(<App />);

  const activosEnProduccion = screen.getAllByText(/Activo \/ En Producción/i);
  const enDesarrollo = screen.getAllByText(/En Desarrollo \(Activo\)/i);
  const misionCritica = screen.getAllByText(/Activo \/ Misión Crítica/i);

  expect(activosEnProduccion.length).toBeGreaterThanOrEqual(4); // VentaRifas, Distriboo, YOIS Snacks, Fideliza
  expect(enDesarrollo.length).toBeGreaterThanOrEqual(4); // Planning Yoisar, PortalCheck, Guajira, Por el Caribe (+ duplicados en menú lateral)
  expect(misionCritica.length).toBeGreaterThanOrEqual(2); // Sistema CGM, App Patología (+ duplicados en menú lateral)
});

test('renders all anexo projects regardless of development status', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /Planning Yoisar/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /PortalCheck/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Sistema CGM \(Gobierno\)/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Patología \(Gobierno\)/i })).toBeInTheDocument();
});

test('hidden projects are not visible', () => {
  render(<App />);

  // Check that hidden projects are in DOM but not visible (Inversores)
  const hiddenProjects = document.querySelectorAll('[style*="display: none"]');
  expect(hiddenProjects.length).toBeGreaterThanOrEqual(1); // Inversores
});

test('renders YOIS brand at least 3 times in copy', () => {
  render(<App />);

  const yoisOccurrences = screen.getAllByText(/YOIS/);
  expect(yoisOccurrences.length).toBeGreaterThanOrEqual(3);
});

test('renders footer with brand signature', () => {
  render(<App />);

  const footer = screen.getByText(/© 2026 - YOIS \| Desarrollo, SaaS e IA/i);
  expect(footer).toBeInTheDocument();
});

test('does not render emojis, only bootstrap-icons', () => {
  const { container } = render(<App />);

  const emojiRegex = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;
  expect(emojiRegex.test(container.textContent)).toBe(false);
  expect(container.querySelectorAll('i.bi').length).toBeGreaterThan(0);
});

test('renders case studies section with the three cases', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /^Casos de estudio$/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Patología \(Hospital Madariaga\)/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /CGM · Gestión documental/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Clerk AI · Asistente conversacional multi-cliente/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /YOIS Snacks · Tienda online de snacks proteicos/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /YOIS Helados · Tienda online de helados proteicos/i })).toBeInTheDocument();
  expect(screen.getAllByText('Papel de la IA')).toHaveLength(5);
  const siteLinks = screen.getAllByRole('link', { name: /Ver sitio/i }).map((l) => l.getAttribute('href'));
  expect(siteLinks).toEqual(['https://yoissnacks.com/', 'https://helados.yoissnacks.com/']);
});

test('renders how I work with AI method steps', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /Cómo trabajo con IA/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Requerimiento escrito/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Verificación/i })).toBeInTheDocument();
});

test('renders GitHub and email contact links', () => {
  render(<App />);

  expect(screen.getByRole('link', { name: /GitHub/i })).toHaveAttribute('href', 'https://github.com/yoisar');
  expect(screen.getByRole('link', { name: /Escribime por email/i })).toHaveAttribute('href', 'mailto:me@yoisar.com');
});

test('renders LinkedIn link and CV downloads', () => {
  render(<App />);

  expect(screen.getByRole('link', { name: /LinkedIn/i })).toHaveAttribute('href', 'https://www.linkedin.com/in/yoisar/');
  const cvLinks = screen.getAllByRole('link', { name: /Descargar CV/i });
  expect(cvLinks.length).toBeGreaterThanOrEqual(2);
  cvLinks.forEach((link) => expect(link).toHaveAttribute('href', '/cv/cv-yassel-izquierdo-es.pdf'));
});

test('shows the full name', () => {
  render(<App />);

  expect(screen.getAllByText('Yassel Omar Izquierdo Souchay').length).toBeGreaterThanOrEqual(1);
});

test('does not reference discontinued projects', () => {
  const { container } = render(<App />);

  expect(container.textContent).not.toMatch(/AdVantage|Cuotaplan|AdminBarrio|BuildShare/i);
  expect(container.innerHTML).not.toMatch(/cuotaplan\.com|adminbarrio\.com|advantage\.yoisar\.com|build\.yoisar\.com/i);
});

test('renders schedule a call button', () => {
  render(<App />);

  const schedule = screen.getByRole('link', { name: /Agendar una llamada/i });
  expect(schedule.getAttribute('href')).toMatch(/^(https:\/\/|mailto:me@yoisar\.com)/);
});

test('editorial rule: no technology names, versions or pipelines in project texts', () => {
  render(<App />);

  const projectTexts = [
    document.getElementById('casos').textContent,
    document.getElementById('proyectos').textContent
  ].join(' ');
  const forbidden = /Patología V2|RISMI \(Hospital Madariaga\)|Laravel|Vue\.js|Next\.js|PostgreSQL|GitHub Actions|GHCR|pgvector|PHP|Vitest|Cypress|Playwright|v0\.10|con frontend -|hacia con/i;
  expect(projectTexts).not.toMatch(forbidden);
  expect(projectTexts).not.toMatch(/ {2,}|\.\.|,,/);
  expect(projectTexts).toMatch(/Actualmente en desarrollo/);
  expect(projectTexts).toMatch(/más de 350\.000 estudios históricos/i);
});
