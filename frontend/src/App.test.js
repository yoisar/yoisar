import { render, screen } from '@testing-library/react';
import i18n from './i18n';
import App from './App';

beforeAll(() => {
  i18n.changeLanguage('es');
});

test('renders hero title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Desarrollo SaaS, Apps con IA y despliego infraestructura escalable\./i);
  expect(titleElement).toBeInTheDocument();
});

test('renders about section', () => {
  render(<App />);
  const aboutSection = screen.getByText(/Así trabajo: mi ingeniería de software/i);
  expect(aboutSection).toBeInTheDocument();
});

test('renders contact section', () => {
  render(<App />);
  const contactSection = screen.getByText(/¿Empezamos tu proyecto\?/i);
  expect(contactSection).toBeInTheDocument();
});

test('renders projects section', () => {
  render(<App />);
  const projectsSection = screen.getByRole('heading', { name: /Mis Proyectos/i });
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
  const cotizarButton = screen.getByRole('link', { name: /Hablemos de tu idea/i });
  const iaButton = screen.getByRole('link', { name: /Cotizá conmigo/i });
  expect(cotizarButton).toBeInTheDocument();
  expect(iaButton).toBeInTheDocument();
});

test('renders visible project links', () => {
  render(<App />);

  // Test that visible project links exist (Fideliza, Ventarifas, Distriboo, CGM, YOIS Snacks, Guajira, Inversores)
  const visibleProjectLinks = screen.getAllByRole('link', { name: /Ver Proyecto/i });
  expect(visibleProjectLinks).toHaveLength(8);

  // Test specific URLs for visible projects
  const hrefs = visibleProjectLinks.map(link => link.getAttribute('href'));
  expect(hrefs).toContain('https://fideliza.yoisar.com/fideliza');
  expect(hrefs).toContain('https://ventarifas.com');
  expect(hrefs).toContain('https://front.guajira.dev.yoisar.com/');
  expect(hrefs).toContain('https://porelcaribe.dev.yoisar.com/');
  expect(hrefs).toContain('https://fideliza.yoisar.com/crowdfunding/registro-inversor-dinamico');
});

test('displays dynamic years of experience', () => {
  render(<App />);
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2001;
  const experienceText = screen.getByText(new RegExp(`${yearsOfExperience} años de experiencia`, 'i'));
  expect(experienceText).toBeInTheDocument();
});

test('renders visible project technologies', () => {
  render(<App />);

  const reactNativeBadges = screen.getAllByText(/React Native/i);
  const laravelBadges = screen.getAllByText(/Laravel/i);
  const crmBadges = screen.getAllByText(/CRM/i);
  const marketplaceBadges = screen.getAllByText(/Marketplace/i);
  const nextBadges = screen.getAllByText(/Next\.js|Nextjs/i);
  const investmentBadges = screen.getAllByText(/Investment/i);

  expect(reactNativeBadges.length).toBe(2); // Fideliza and YOIS Snacks have React Native
  expect(laravelBadges.length).toBeGreaterThanOrEqual(1); // visible projects use Laravel
  expect(crmBadges.length).toBe(1); // Fideliza has CRM
  expect(marketplaceBadges.length).toBeGreaterThanOrEqual(1); // Ventarifas is a marketplace
  expect(nextBadges.length).toBeGreaterThanOrEqual(1); // Ventarifas built with Next.js
  expect(investmentBadges.length).toBeGreaterThanOrEqual(1); // investor card shows Investment badge
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
  expect(screen.getByRole('heading', { name: /App Patología \(Gobierno\)/i })).toBeInTheDocument();
});

test('hidden projects are not visible', () => {
  render(<App />);

  // Check that hidden projects are in DOM but not visible (Cuotaplan, AdminBarrios)
  const hiddenProjects = document.querySelectorAll('[style*="display: none"]');
  expect(hiddenProjects.length).toBeGreaterThanOrEqual(2); // Should have at least 2 hidden project divs
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
