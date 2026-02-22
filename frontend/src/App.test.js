import { render, screen } from '@testing-library/react';
import App from './App';

test('renders YOIS title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Hola, soy YOIS/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders about section', () => {
  render(<App />);
  const aboutSection = screen.getByText(/Sobre mí/i);
  expect(aboutSection).toBeInTheDocument();
});

test('renders contact section', () => {
  render(<App />);
  const contactSection = screen.getByText(/¿Hablamos\?/i);
  expect(contactSection).toBeInTheDocument();
});

test('renders projects section', () => {
  render(<App />);
  const projectsSection = screen.getByText(/Proyectos Actuales/i);
  expect(projectsSection).toBeInTheDocument();
});

test('renders fideliza project heading', () => {
  render(<App />);
  const fidelizaHeading = screen.getByRole('heading', { name: /Fideliza/i });
  expect(fidelizaHeading).toBeInTheDocument();
});

test('renders contact email link', () => {
  render(<App />);
  const emailLink = screen.getByRole('link', { name: /📧 me@yoisar.com/i });
  expect(emailLink).toBeInTheDocument();
  expect(emailLink).toHaveAttribute('href', 'mailto:me@yoisar.com');
});

test('renders website link', () => {
  render(<App />);
  const websiteLink = screen.getByRole('link', { name: /🌐 yoisar.com/i });
  expect(websiteLink).toBeInTheDocument();
  expect(websiteLink).toHaveAttribute('href', 'https://www.yoisar.com');
});

test('renders developer description', () => {
  render(<App />);
  const description = screen.getByText(/Desarrollador Fullstack/i);
  expect(description).toBeInTheDocument();
});

test('renders contact button', () => {
  render(<App />);
  const contactButton = screen.getByRole('link', { name: /📧 Contactar/i });
  expect(contactButton).toBeInTheDocument();
});

test('renders view projects button', () => {
  render(<App />);
  const projectsButton = screen.getByRole('link', { name: /🚀 Ver Proyectos/i });
  expect(projectsButton).toBeInTheDocument();
});

test('renders visible project links', () => {
  render(<App />);
  
  // Test that 3 visible project links exist (Fideliza, Ventarifas, Inversores)
  const visibleProjectLinks = screen.getAllByRole('link', { name: /🔗 Ver Proyecto/i });
  expect(visibleProjectLinks).toHaveLength(3);
  
  // Test specific URLs for visible projects
  const hrefs = visibleProjectLinks.map(link => link.getAttribute('href'));
  expect(hrefs).toContain('https://fideliza.yoisar.com/fideliza');
  expect(hrefs).toContain('https://ventarifas.com');
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
  
  // Check for technology badges in visible projects (Fideliza and Ventarifas)
  const reactNativeBadges = screen.getAllByText(/React Native/i);
  const laravelBadges = screen.getAllByText(/Laravel/i);
  const crmBadges = screen.getAllByText(/CRM/i);
  const marketplaceBadges = screen.getAllByText(/Marketplace/i);
  const nextBadges = screen.getAllByText(/Next\.js|Nextjs/i);
  const investmentBadges = screen.getAllByText(/Investment/i);
  
  expect(reactNativeBadges.length).toBe(1); // Fideliza has React Native
  expect(laravelBadges.length).toBeGreaterThanOrEqual(1); // visible projects use Laravel
  expect(crmBadges.length).toBe(1); // Fideliza has CRM
  expect(marketplaceBadges.length).toBeGreaterThanOrEqual(1); // Ventarifas is a marketplace
  expect(nextBadges.length).toBeGreaterThanOrEqual(1); // Ventarifas built with Next.js
  expect(investmentBadges.length).toBeGreaterThanOrEqual(1); // investor card shows Investment badge
});

test('renders visible project categories', () => {
  render(<App />);
  
  // Check for project category badges in visible projects (only Fideliza)
  const crmBadge = screen.getByText(/CRM/i);
  
  expect(crmBadge).toBeInTheDocument();
});

test('hidden projects are not visible', () => {
  render(<App />);
  
  // Check that hidden projects are in DOM but not visible (Cuotaplan, AdminBarrios)
  const hiddenProjects = document.querySelectorAll('[style*="display: none"]');
  expect(hiddenProjects.length).toBeGreaterThanOrEqual(2); // Should have at least 2 hidden project divs
});
