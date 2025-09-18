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

test('renders cuotaplan project heading', () => {
  render(<App />);
  const cuotaplanHeading = screen.getByRole('heading', { name: /Cuotaplan/i });
  expect(cuotaplanHeading).toBeInTheDocument();
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
  
  // Test that only 2 visible project links exist (hidden projects should not be counted)
  const visibleProjectLinks = screen.getAllByRole('link', { name: /🔗 Ver Proyecto/i });
  expect(visibleProjectLinks).toHaveLength(2);
  
  // Test specific URLs for visible projects
  expect(visibleProjectLinks[0]).toHaveAttribute('href', 'https://cuotaplan.com/index');
  expect(visibleProjectLinks[1]).toHaveAttribute('href', 'https://fideliza.yoisar.com/fideliza');
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
  
  // Check for technology badges in visible projects
  const reactBadges = screen.getAllByText(/React/i);
  const laravelBadges = screen.getAllByText(/Laravel/i);
  const reactNativeBadges = screen.getAllByText(/React Native/i);
  
  expect(reactBadges.length).toBeGreaterThanOrEqual(1); // CuotaPlan has React
  expect(laravelBadges.length).toBeGreaterThanOrEqual(2); // Both projects have Laravel
  expect(reactNativeBadges.length).toBe(1); // Fideliza has React Native
});

test('renders visible project categories', () => {
  render(<App />);
  
  // Check for project category badges in visible projects
  const fintechBadge = screen.getByText(/FinTech/i);
  const crmBadge = screen.getByText(/CRM/i);
  
  expect(fintechBadge).toBeInTheDocument();
  expect(crmBadge).toBeInTheDocument();
});

test('hidden projects are not visible', () => {
  render(<App />);
  
  // Check that hidden projects are in DOM but not visible
  const hiddenProjects = document.querySelectorAll('[style*="display: none"]');
  expect(hiddenProjects.length).toBeGreaterThanOrEqual(2); // Should have 2 hidden project divs
});
